
"use client"

import * as React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsOnServer, type Product } from '@/lib/products';
import { useSearchParams } from 'next/navigation';

function AllProductsContent() {
  const [allProducts, setAllProducts] = React.useState<Product[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const searchTerm = search?.toLowerCase() || '';

  React.useEffect(() => {
    getProductsOnServer().then(setAllProducts);
  }, []);

  const filteredProducts = searchTerm 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.short_description?.toLowerCase().includes(searchTerm) ||
        product.category_name?.toLowerCase().includes(searchTerm) ||
        product.subcategory_name?.toLowerCase().includes(searchTerm)
      )
    : allProducts;

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
            <BreadcrumbPage>All Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-headline font-bold text-primary">All Products</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Browse our complete catalog of high-performance sealing solutions. Use the filters to find exactly what you need.
        </p>
      </div>

      <ProductGrid products={filteredProducts} />
    </>
  );
}

export default function AllProductsPage() {
  return (
    <React.Suspense fallback={<div>Loading products...</div>}>
      <AllProductsContent />
    </React.Suspense>
  )
}
