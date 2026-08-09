
import { notFound } from 'next/navigation';
import { getSupportArticles, getSupportArticleBySlug } from '@/lib/support';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


export async function generateStaticParams() {
  const articles = await getSupportArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface SupportPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { slug } = await params;
  const article = await getSupportArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Support</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{article.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="text-4xl font-headline text-primary">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div 
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}
