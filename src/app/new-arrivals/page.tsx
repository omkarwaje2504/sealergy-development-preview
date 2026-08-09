
import { getProductsOnServer } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';



// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components




export default async function NewArrivalsPage() {
  const allProducts = await getProductsOnServer();
  const newProductIds = ['type-600', 'type-301', 'type-601'];
  const newProducts = allProducts.filter(p => newProductIds.includes(p.slug));
  const featuredProduct = newProducts.find(p => p.slug === 'type-600');
  const otherNewProducts = newProducts.filter(p => p.slug !== 'type-600');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 text-center">
          <div className="container mx-auto">
              <h1 className="text-5xl font-headline font-bold text-primary">New Arrivals</h1>
              <p className="mt-4 text-xl text-muted-foreground">Check out the latest additions to our product line.</p>
          </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
          <section className="py-24 bg-background">
              <div className="container mx-auto">
                  <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Featured New Product</h2>
                  <div className="grid md:grid-cols-2 gap-12 items-center bg-card p-12 rounded-lg">
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg border">
                        <Image 
                          src={featuredProduct.image!} 
                          alt={featuredProduct.name}
                          fill
                          className="object-contain"
                          data-ai-hint={featuredProduct.imageHint}
                        />
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm">NEW!</Badge>
                      </div>
                      <div>
                          <Badge variant="secondary" className="mb-2">{featuredProduct.category_name}</Badge>
                          <h3 className="text-4xl font-headline font-bold text-primary mb-4">{featuredProduct.name}</h3>
                          <p className="text-lg text-muted-foreground mb-6">{featuredProduct.short_description}</p>
                          <Button asChild size="lg">
                              <Link href={`/product/${featuredProduct.slug}`}>View Product Details</Link>
                          </Button>
                      </div>
                  </div>
              </div>
          </section>
      )}

      {/* Other New Arrivals */}
      <section className="py-24 bg-primary/5">
          <div className="container mx-auto">
              <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">More New Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {otherNewProducts.map(product => (
                      <div key={product.id} className="relative">
                          <ProductCard product={product} />
                          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">NEW!</Badge>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
