
import Link from 'next/link';
import { getCategoriesWithSubCategories } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';



// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components




const categoryImages: Record<string, string> = {
    'mechanical-seals': '/home page/Our Product Categories/Elastomeric Bellows Seals.jpg',
    'industrial-pumps': '/home page/Our Product Categories/Industrial Pumps.jpg',
    'gaskets-o-rings': '/home page/Our Product Categories/Gaskets & O-Rings.jpg',
    'oil-seals': '/home page/Our Product Categories/Oil seals.jpg',
};

const categoryHints: Record<string, string> = {
    'mechanical-seals': 'mechanical seal',
    'industrial-pumps': 'industrial pump',
    'gaskets-o-rings': 'gasket o-ring',
    'oil-seals': 'oil seal',
};

export default async function ProductsOverviewPage() {
  const categories = await getCategoriesWithSubCategories();

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-headline font-bold text-primary">Product Categories</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          From high-performance mechanical seals to robust industrial pumps, explore our comprehensive range of engineered solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/products/${category.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
              <div className="relative h-64 w-full">
                <Image
                  src={categoryImages[category.slug] || "https://picsum.photos/seed/category-img/600/400"}
                  alt={`Image for ${category.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={categoryHints[category.slug] || 'industrial product'}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary group-hover:text-accent">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Explore our range of {category.name.toLowerCase()} for various applications.
                </p>
                <div className="flex items-center font-semibold text-accent">
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
