
"use client";

import * as React from 'react';
import ProductCard from '@/components/products/ProductCard';
import type { Product } from '@/lib/products';
import { Skeleton } from '@/components/ui/skeleton';

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
         <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[192px] w-full rounded-xl" />
              <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
              </div>
          </div>
      ))}
    </div>
  );
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products) {
      return <ProductGridSkeleton />
  }

  return (
    <div className="relative">
      {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
      ) : (
          <div className="text-center py-16 col-span-full bg-card rounded-lg">
              <h2 className="text-2xl font-bold text-primary">No Products Found</h2>
              <p className="mt-4 text-muted-foreground">
                  Your search and filter combination did not return any results. Try adjusting your filters.
              </p>
          </div>
      )}
    </div>
  );
}
