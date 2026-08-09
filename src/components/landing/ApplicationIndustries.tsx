
import Image from "next/image";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { createSlug } from "@/lib/utils";

const industries = [
  {
    name: "Water & Wastewater",
    description: "Durable, corrosion-resistant seals for continuous service.",
    image: "/assets/Water%20%26%20Wastewater.jpg",
  },
  {
    name: "Oil & Gas",
    description: "High-pressure seals engineered for hydrocarbons.",
    image: "/assets/Oil%20%26%20Gas.jpg",
  },
  {
    name: "Chemical Processing",
    description: "Acid-proof seals with PTFE/Viton materials.",
    image: "/assets/Chemical%20Processing.jpg",
  },
  {
    name: "Power Generation",
    description: "Reliable seals for turbines & auxiliary pumps.",
    image: "/assets/Power%20Generation.jpg",
  },
  {
    name: "Pharmaceutical",
    description: "Clean-room sealing—no contamination, high-purity materials.",
    image: "/assets/Chemical%20Processing.jpg",
  },
  {
    name: "Food & Beverage",
    description: "Food-grade seals meeting hygienic standards.",
    image: "/assets/Food%20%26%20Beverage.jpg",
  },
  {
    name: "HVAC & Cooling",
    description: "Seals designed for refrigerants and thermal fluids.",
    image: "/assets/Power%20Generation.jpg",
  },
  {
    name: "Marine & Shipbuilding",
    description: "Saltwater-tolerant mechanical seals on marine pumps.",
    image: "/assets/Mining.jpg",
  },
];

export default function ApplicationIndustries() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="w-full bg-primary p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-headline font-bold text-center text-primary-foreground">
            Application Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <Link key={industry.name} href={`/applications/${createSlug(industry.name)}`} passHref>
              <Card className="h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden border bg-card">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} mechanical seals and industrial applications`}
                      fill
                      className="transition-transform duration-300 group-hover:scale-105 object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-headline font-semibold text-primary text-center mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {industry.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
