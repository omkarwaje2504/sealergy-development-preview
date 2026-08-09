"use client";

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  imageHint?: string;
}

export default function ProductImageGallery({ images, productName, imageHint }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = React.useState(images[0]);

  const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4');

  return (
    <div className="grid gap-4">
      <Card className="overflow-hidden bg-card">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full bg-card">
            {isVideo(mainImage) ? (
              <video
                src={mainImage}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={mainImage}
                alt={`Main image for ${productName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="transition-opacity duration-300 object-contain"
                data-ai-hint={imageHint || "mechanical seal"}
              />
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => {
          const isImgVideo = isVideo(image);
          return (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={cn(
                "relative aspect-square w-full rounded-md overflow-hidden ring-2 ring-transparent transition-all focus:outline-none focus:ring-2 focus:ring-primary bg-card p-1",
                mainImage === image ? "ring-primary shadow-md" : "hover:ring-primary/50"
              )}
            >
              {isImgVideo ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center rounded-sm overflow-hidden">
                  <video
                    src={image}
                    className="w-full h-full object-contain opacity-80"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/20 transition-colors">
                    <Play className="w-6 h-6 text-white drop-shadow-md fill-white" />
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1} for ${productName}`}
                    fill
                    sizes="25vw"
                    className="object-contain"
                    data-ai-hint={imageHint || "mechanical seal"}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
