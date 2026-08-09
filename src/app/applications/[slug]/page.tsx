
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getApplications, getApplicationBySlug } from '@/lib/applications';
import { getProductsOnServer } from '@/lib/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProductCard from '@/components/products/ProductCard';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


export async function generateStaticParams() {
  const applications = await getApplications();
  return applications.map((app) => ({
    slug: app.slug,
  }));
}

interface ApplicationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ApplicationPage({ params }: ApplicationPageProps) {
  const { slug } = await params;
  const application = await getApplicationBySlug(slug);
  const allProducts = await getProductsOnServer();

  if (!application) {
    notFound();
  }
  
  const relevantProducts = allProducts.filter(p => application.relevantProducts?.includes(p.name));

  return (
    <>
      <section className="relative h-80 bg-primary/10">
        <Image 
          src={application.image || "https://picsum.photos/seed/app-hero/1600/400"}
          alt={`Image for ${application.name}`}
          fill
          className="opacity-20 object-cover"
          data-ai-hint={application.imageHint || "industrial application"}
        />
        <div className="container mx-auto h-full flex flex-col justify-center relative z-10">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-primary/80 hover:text-primary">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-bold">{application.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-headline font-bold text-primary">{application.name}</h1>
        </div>
      </section>

      <section className="py-24">
          <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-headline font-bold text-primary mb-6">Application Overview</h2>
                  <p className="text-lg text-muted-foreground">
                      {application.description}
                  </p>
              </div>

              <div className="mt-20">
                  <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Recommended Products</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      {relevantProducts.length > 0 ? (
                         relevantProducts.map(product => (
                              <ProductCard key={product.id} product={product} />
                          ))
                      ) : (
                          <p className="col-span-full text-center text-muted-foreground">No specific products are listed for this application yet.</p>
                      )}
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
