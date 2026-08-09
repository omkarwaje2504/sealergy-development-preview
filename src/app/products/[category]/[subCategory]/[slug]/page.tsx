
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProductsOnServer, getProductImages } from '@/lib/products';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from '@/components/ui/table';
import { Download, CheckCircle, Settings, Thermometer, CheckSquare, MessageSquare, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductCard from '@/components/products/ProductCard';
import ProductImageGallery from '@/components/products/ProductImageGallery';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


export async function generateStaticParams() {
  const products = await getProductsOnServer();
  return products
    .filter(p => p.category_slug && p.subcategory_slug && p.slug)
    .map((product) => ({
      category: product.category_slug,
      subCategory: product.subcategory_slug, // Matches [subCategory] folder
      slug: product.slug,
    }));
}

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    subCategory: string;
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const allProducts = await getProductsOnServer();
  const relatedProducts = allProducts.filter(p => 
      p.id !== product.id && 
      p.primary_category_id === product.primary_category_id
  ).slice(0, 3);

  const images = getProductImages(product);

  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            {product.category_slug && product.category_name && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                   <BreadcrumbLink href={`/products/${product.category_slug}`}>{product.category_name}</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {product.subcategory_slug && product.subcategory_name && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                   <BreadcrumbLink href={`/products/${product.category_slug}/${product.subcategory_slug}`}>{product.subcategory_name}</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column for Image Gallery */}
          <div className="lg:sticky lg:top-24">
             <ProductImageGallery images={images} productName={product.name} imageHint={product.imageHint} />
          </div>

          {/* Right Column for details */}
          <div className="space-y-6">
            <Card>
                <CardContent className="p-6">
                    <h1 className="text-3xl font-headline font-bold text-primary mb-2">{product.name}</h1>
                    <p className="text-muted-foreground">{product.short_description}</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Info className="w-6 h-6 text-accent"/>About this Product</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-base text-muted-foreground">{product.description || 'No description available for this product.'}</p>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckSquare className="w-6 h-6 text-accent"/>Technical Features</CardTitle>
              </CardHeader>
              <CardContent>
                {product.details?.technical_features && Object.keys(product.details.technical_features).length > 0 ? (
                    <ul className="space-y-3">
                        {Object.entries(product.details.technical_features).map(([key, value]) => (
                            <li key={key} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                                <span><strong>{key}:</strong> {value as string}</span>
                            </li>
                        ))}
                    </ul>
                ) : <p className="text-muted-foreground">No technical features listed.</p>}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Settings className="w-6 h-6 text-accent"/>Standard Sealface Combinations</CardTitle>
              </CardHeader>
              <CardContent>
                {product.details?.seal_face_combinations && product.details.seal_face_combinations.length > 0 ? (
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Rotary Face</TableHead>
                        <TableHead>Stationary Face</TableHead>
                        <TableHead>Complete Seal Code</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {product.details.seal_face_combinations.map((row, index) => (
                        <TableRow key={index}>
                        <TableCell>{row.rotary_face}</TableCell>
                        <TableCell>{row.stationary_face}</TableCell>
                        <TableCell>{row.seal_code}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                ) : <p className="text-muted-foreground">No material information available.</p>}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Thermometer className="w-6 h-6 text-accent"/>Elastomer Temperature Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                 {product.details?.elastomer_temperatures && product.details.elastomer_temperatures.length > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Material</TableHead>
                                <TableHead>Minimum</TableHead>
                                <TableHead>Maximum</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {product.details.elastomer_temperatures.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-semibold">{row.elastomer_name}</TableCell>
                                <TableCell>{row.temperature_min}°{row.temperature_unit || 'C'}</TableCell>
                                <TableCell>{row.temperature_max}°{row.temperature_unit || 'C'}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                 ) : <p className="text-muted-foreground">No operating limits specified.</p>}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dimensional Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Dimensions</h3>
                     {product.details?.dimensions && product.details.dimensions.length > 0 ? (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                    {Object.keys(product.details.dimensions[0]).map(key => <TableHead key={key}>{key.replace(/_/g, ' ')}</TableHead>)}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {product.details.dimensions.map((row, index) => (
                                    <TableRow key={index}>
                                        {Object.values(row).map((val, i) => <TableCell key={i}>{val as any}</TableCell>)}
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                     ) : <p className="text-muted-foreground">No dimensions available.</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24">
            <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {relatedProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
                 <Card className="flex flex-col items-center justify-center text-center p-6 bg-accent/10 border-2 border-dashed border-accent">
                    <MessageSquare className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-headline font-bold text-primary mb-2">Ask the expert for complete solution</h3>
                    <p className="text-muted-foreground mb-4">Our experts can help you find or create the perfect seal for your application.</p>
                    <Button asChild>
                        <Link href="/contact">Enquire Now</Link>
                    </Button>
                </Card>
            </div>
        </div>
      </div>
    </>
  );
}
