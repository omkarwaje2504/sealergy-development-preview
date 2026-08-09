

import Banner from '@/components/landing/Banner';
import Solutions from '@/components/landing/Solutions';
import ProductCategories from '@/components/landing/ProductCategories';
import AboutUs from '@/components/landing/AboutUs';
import SpecialTopics from '@/components/landing/SpecialTopics';
import KeyMetrics from '@/components/landing/KeyMetrics';
import Contact from '@/components/landing/Contact';



export default function Home() {
  return (
    <>
      <Banner />
      <Solutions />
      <ProductCategories />
      <AboutUs />
      <SpecialTopics />
      <KeyMetrics />
      <Contact />
    </>
  );
}
