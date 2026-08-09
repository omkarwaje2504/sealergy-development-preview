
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoriesWithSubCategories, getCategoryBySlug, getSubCategoriesForCategory, getProductsByCategory } from '@/lib/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, MessageSquare } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


export async function generateStaticParams() {
  const categories = await getCategoriesWithSubCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

interface CategoryPageProps {
  params: Promise<{
    category: string; // This is a slug
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  
  const category = await getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }
  
  const subCategories = await getSubCategoriesForCategory(categorySlug);
  const productsInCategory = await getProductsByCategory(categorySlug);

  return (
    <>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
              <BreadcrumbPage>{category.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold text-primary">{category.name}</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our selection of {category.name?.toLowerCase()}. Browse by sub-category or view all products below.
          </p>
      </div>

      {subCategories.length > 0 && (
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary/90 mb-6 pb-2 border-b border-primary/10">Sub-Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subCategories.map((subCategory) => (
              <Link key={subCategory.slug} href={`/products/${categorySlug}/${subCategory.slug}`} passHref>
                <Card id={subCategory.slug} className="group hover:border-primary hover:bg-primary/5 transition-all">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary group-hover:text-primary-dark">{subCategory.name}</span>
                    <ChevronRight className="w-5 h-5 text-primary/50 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {productsInCategory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {productsInCategory.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
      ) : (
        subCategories.length === 0 && (
          <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-primary">No Products Found</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  There are currently no products listed in this category.
              </p>
          </div>
        )
      )}

      <div className="mt-24 flex justify-center">
        <Card className="flex flex-col items-center justify-center text-center p-6 bg-accent/10 border-2 border-dashed border-accent max-w-2xl">
            <MessageSquare className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-headline font-bold text-primary mb-2">Ask the expert for complete solution</h3>
            <p className="text-muted-foreground mb-4">Our experts can help you find or create the perfect seal for your application.</p>
            <Button asChild>
                <Link href="/contact">Enquire Now</Link>
            </Button>
        </Card>
      </div>
    </>
  );
}
