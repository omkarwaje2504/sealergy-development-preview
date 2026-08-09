
import * as React from 'react';
import ProductFilters from '@/components/products/ProductFilters';
import { getCategoriesWithSubCategories } from '@/lib/products';
import type { ProductCategory, ProductSubCategory } from '@/lib/products';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const categoriesWithSubcategories = await getCategoriesWithSubCategories();

    const categories: ProductCategory[] = categoriesWithSubcategories.map(({ id, name, slug }) => ({ id, name, slug }));
    const subCategories: ProductSubCategory[] = categoriesWithSubcategories.flatMap(c => c.subCategories);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="lg:col-span-1 space-y-8">
                    <React.Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded-lg" />}>
                        <ProductFilters
                            categories={categories}
                            subCategories={subCategories}
                        />
                    </React.Suspense>
                </div>
                <div className="lg:col-span-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
