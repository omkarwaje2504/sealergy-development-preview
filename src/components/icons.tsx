import Image from 'next/image';
import type { ComponentProps } from 'react';

type LogoProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt'> & {
  width?: number;
  height?: number;
};

export const Logo = ({ width, height, className = '', ...props }: LogoProps) => {
  const hasCustomDimensions = width !== undefined || height !== undefined;
  
  return (
    <div 
      className={`relative ${className} ${!hasCustomDimensions ? 'w-[300px] h-[75px]' : ''}`} 
      style={hasCustomDimensions ? { width, height } : undefined}
    >
      <Image
        src="/Updated%20Images/Sealergy%20Final%20images%20%20Files/final%20files/logo/png/logo-01.png"
        alt="Sealergy Logo"
        fill
        sizes="(max-width: 768px) 220px, 450px"
        style={{ objectFit: 'contain' }}
        priority
        {...props}
      />
    </div>
  );
};
