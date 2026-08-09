
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/products';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product.slug) {
      // This can happen if category/subcategory relations are missing for a product.
      // Render a placeholder or log an error, but don't crash.
      return null;
  }
  
  const productUrl = `/product/${product.slug}`;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <Link href={productUrl} className="block relative h-48 w-full group">
          <Image
            src={product.image || "/assets/Empty Image.jpg"}
            alt={product.name}
            fill
            className="transition-transform duration-500 group-hover:scale-105 object-cover"
            data-ai-hint={product.imageHint || "mechanical seal"}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        {product.category_name && <Badge variant="secondary" className="mb-2">{product.category_name}</Badge>}
        <CardTitle className="text-lg font-headline mb-2 h-14">
          <Link href={productUrl} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.short_description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={productUrl}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
