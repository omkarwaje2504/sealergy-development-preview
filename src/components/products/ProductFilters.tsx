
"use client"

import * as React from 'react';
import { useRouter, useParams, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { MessageSquare, Search } from 'lucide-react';
import type { ProductCategory, ProductSubCategory } from '@/lib/products';
import { cn, createSlug } from '@/lib/utils';
import { Button } from '../ui/button';
import { useDebounce } from '@/hooks/use-debounce';
import { Separator } from '../ui/separator';
import Link from 'next/link';

interface ProductFiltersProps {
    categories: ProductCategory[];
    subCategories: ProductSubCategory[];
}

function getActiveIds(params: ReturnType<typeof useParams>, categories: ProductCategory[], subCategories: ProductSubCategory[]) {
    const categorySlug = params.category as string;
    const subCategorySlug = params.subCategory as string;

    const activeCategory = categories.find(c => c.slug === categorySlug);
    const activeSubCategory = subCategories.find(sc => sc.slug === subCategorySlug && sc.category_id === activeCategory?.id);

    return {
        activeCategoryId: activeCategory?.id || null,
        activeSubCategoryId: activeSubCategory?.id || null,
    };
}

export default function ProductFilters({ categories, subCategories }: ProductFiltersProps) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { activeCategoryId, activeSubCategoryId } = getActiveIds(params, categories, subCategories);

  const [searchTerm, setSearchTerm] = React.useState(searchParams.get('search') || '');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const isAllProductsPage = pathname === '/products/all';

  React.useEffect(() => {
    if (isAllProductsPage) {
        const params = new URLSearchParams(window.location.search);
        if (debouncedSearchTerm) {
            params.set('search', debouncedSearchTerm);
        } else {
            params.delete('search');
        }
        // Use router.replace to update URL without adding to history
        router.replace(`${pathname}?${params.toString()}`);
    }
  }, [debouncedSearchTerm, isAllProductsPage, pathname, router]);


  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/products/${categorySlug}`);
  };
  
  const handleSubCategoryClick = (categorySlug: string, subCategorySlug: string) => {
    router.push(`/products/${categorySlug}/${subCategorySlug}`);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) {
        params.set('search', searchTerm);
    }
    router.push(`/products/all?${params.toString()}`);
  }

  const handleClearFilters = () => {
    setSearchTerm('');
    router.push('/products/all');
  }
  
  const hasActiveFilters = searchTerm || activeCategoryId !== null || activeSubCategoryId !== null;
  
  // Determine which accordion items should be open by default
  const defaultOpenItems = React.useMemo(() => {
    if (isAllProductsPage) {
        // Open all categories on the "all products" page
        return categories.map(c => c.name);
    }
    const activeCategory = categories.find(c => c.id === activeCategoryId);
    // Only open the currently active category on category/subcategory pages
    return activeCategory ? [activeCategory.name] : [];
  }, [isAllProductsPage, categories, activeCategoryId]);

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Search Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative flex items-center gap-2">
          <Input 
            type="text"
            placeholder="Search by name or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
            className="pr-10"
          />
          <Button onClick={handleSearch} size="icon" variant="ghost" className="absolute right-0">
            <Search className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>

        <Accordion type="multiple" defaultValue={defaultOpenItems} className="w-full">
            {categories.map((category) => {
                const childSubCategories = subCategories.filter(sc => sc.category_id === category.id);
                const isCategoryActive = activeCategoryId === category.id && !activeSubCategoryId;
                
                return (
                    <AccordionItem key={category.id} value={category.name}>
                         <AccordionTrigger 
                            onClick={() => handleCategoryClick(category.slug)}
                            className={cn(
                                "text-base font-bold hover:no-underline p-4 rounded-md hover:bg-muted/50",
                                isCategoryActive && "bg-accent/20 text-primary"
                            )}
                         >
                            {category.name}
                        </AccordionTrigger>
                        {childSubCategories.length > 0 && (
                            <AccordionContent className="pl-6 pt-2 space-y-2">
                            {childSubCategories.map(subCat => (
                                <div
                                    key={subCat.id}
                                    onClick={() => handleSubCategoryClick(category.slug, subCat.slug)}
                                    className={cn(
                                      "p-2 rounded-md cursor-pointer hover:bg-muted/50 font-normal",
                                      activeSubCategoryId === subCat.id && "bg-accent/20 text-primary font-semibold"
                                    )}
                                >
                                {subCat.name}
                                </div>
                            ))}
                            </AccordionContent>
                        )}
                    </AccordionItem>
                )
            })}
        </Accordion>
        
        {hasActiveFilters && (
            <Button className="w-full" variant="ghost" onClick={handleClearFilters}>Clear Filters</Button>
        )}
      </CardContent>
      <Separator />
       <CardContent className="p-4 text-center">
        <div className="p-6 bg-accent/10 border-2 border-dashed border-accent rounded-lg">
            <MessageSquare className="w-12 h-12 text-accent mb-4 mx-auto" />
            <h3 className="text-xl font-headline font-bold text-primary mb-2">Ask the expert</h3>
            <p className="text-sm text-muted-foreground mb-4">Can't find what you need? Our experts can help.</p>
            <Button asChild>
                <Link href="/contact">Enquire Now</Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
