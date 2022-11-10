import Parallax from 'parallax-js';
import { useEffect } from 'react';

import 'swiper/swiper-bundle.css';

import FooterSection from '@/components/FooterSection';
import AboutUsSection from '@/components/HomePage/AboutUsSection';
import FeaturedProperties from '@/components/HomePage/FeaturedProperties';
import HeroSection from '@/components/HomePage/HeroSection';
import PopularProperties from '@/components/HomePage/PopularProperties';
import TestimonialCarousel from '@/components/HomePage/TestimonialCarousel';
import VideoSection from '@/components/HomePage/VideoSection';
import ScrollUp from '@/components/ScrollUp';
import Seo from '@/components/Seo';
import StickyHeader from '@/components/StickyHeader';

import Layout from '@/layouts/BlankLayout';

export default function HomePage() {
  useEffect(() => {
    document.querySelectorAll('.scene').forEach((el) => new Parallax(el as HTMLElement));
  }, []);

  return (
    <Layout>
      <Seo templateTitle='MengQi' />

      <StickyHeader />

      <main>
        <HeroSection />
        <AboutUsSection />
        <VideoSection />
        <TestimonialCarousel />
        <PopularProperties />
        <FeaturedProperties />
      </main>

      <FooterSection />

      <ScrollUp />
    </Layout>
  );
}
