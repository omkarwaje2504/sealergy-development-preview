
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/products/ProductCard';
import { getProductsOnServer, getProductsBySubCategory } from '@/lib/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


export async function generateStaticParams() {
  const products = await getProductsOnServer();
  // Filter for unique category and subCategory pairs
  const paths = Array.from(new Set(products
    .filter(p => p.category_slug && p.subcategory_slug)
    .map(p => JSON.stringify({ category: p.category_slug, subCategory: p.subcategory_slug }))
  )).map(s => JSON.parse(s));
  
  return paths;
}

interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subCategory: string; // Matches [subCategory] folder name exactly
  }>;
}

function unslugify(slug: string): string {
    return slug.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
  const { category: categorySlug, subCategory: subCategorySlug } = await params;
  
  const products = await getProductsBySubCategory(categorySlug, subCategorySlug);

  // We need at least one product to determine the names, otherwise we try to unslugify
  const categoryName = products[0]?.category_name || unslugify(categorySlug);
  const subCategoryName = products[0]?.subcategory_name || unslugify(subCategorySlug);


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
            <BreadcrumbLink href={`/products/${categorySlug}`}>{categoryName}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{subCategoryName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold text-primary">{subCategoryName}</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our range of {subCategoryName?.toLowerCase()}.
          </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-primary">No Products Found</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                There are currently no products listed in this sub-category. Please check back later or browse other categories.
            </p>
            <Link href="/products" className="mt-8 inline-block bg-primary text-white px-6 py-2 rounded-md">
              Back to All Products
            </Link>
        </div>
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
