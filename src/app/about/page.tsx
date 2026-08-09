
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Milestone, Award, Settings, HardHat, Wrench, BookOpen, Search, Leaf, CheckCircle } from 'lucide-react';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components


const values = [
    { title: 'Quality', description: 'We prioritize quality in every aspect of our operations.' },
    { title: 'Innovation', description: 'We continuously innovate to stay ahead of industry trends.' },
    { title: 'Customer Satisfaction', description: 'We focus on delivering exceptional customer service and support.' },
];

const whyChooseUs = [
    "Over 50 years of experience in mechanical seal manufacturing",
    "Expertise in customized sealing solutions",
    "State-of-the-art manufacturing facilities",
    "Rigorous quality control processes",
    "Commitment to customer satisfaction",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-80 bg-primary/10">
        <Image 
          src="https://picsum.photos/seed/about-hero/1600/400"
          alt="Engineering team collaborating"
          fill
          className="opacity-20 object-cover"
          data-ai-hint="team collaboration"
        />
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative">
          <h1 className="text-5xl font-headline font-bold text-primary">About Sealergy</h1>
          <p className="mt-4 text-xl max-w-3xl text-muted-foreground">
            A Renowned Manufacturer of High-Quality Mechanical Seals, Founded in 1983.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Sealergy is a renowned manufacturer of high-quality mechanical seals, with a 50-year legacy of engineering excellence. With over four decades of expertise, we've established ourselves as a trusted partner for industries requiring precision-engineered sealing solutions.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                  src="https://picsum.photos/seed/manufacturing/600/400"
                  alt="Precision manufacturing equipment"
                  fill
                  className="object-cover"
                  data-ai-hint="precision manufacturing"
              />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                  src="https://picsum.photos/seed/blueprints/600/400"
                  alt="Engineers discussing blueprints"
                  fill
                  className="object-cover"
                  data-ai-hint="engineering blueprints"
              />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary mb-6">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Our team of skilled engineers and technicians have extensive experience in designing and manufacturing customized mechanical seals that meet the most demanding applications. We utilize cutting-edge technology and rigorous quality control processes to ensure our products deliver exceptional performance, reliability, and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Mission & Values</h2>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
              <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                      <CardTitle><Milestone className="inline-block mr-2" />Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>At Sealergy, we're committed to providing innovative sealing solutions that exceed our customers' expectations. We strive to build long-term relationships with our clients, delivering tailored products and services that enhance their operations and contribute to their success.</p>
                  </CardContent>
              </Card>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(value => (
                  <Card key={value.title}>
                      <CardHeader>
                          <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-headline font-bold text-primary mb-12">Why Choose Us?</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {whyChooseUs.map((reason, index) => (
                       <div key={index} className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                          <CheckCircle className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                          <p className="text-lg text-primary/90">{reason}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
