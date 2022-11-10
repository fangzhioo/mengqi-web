import 'swiper/swiper-bundle.css';

import AboutSection from '@/components/AboutPage/AboutSection';
import BrandSection from '@/components/AboutPage/BrandSection';
import HeroSection from '@/components/AboutPage/HeroSection';
import NewsLetterSection from '@/components/AboutPage/NewsLetterSection';
import TeamSection from '@/components/AboutPage/TeamSection';
import TestimonialCarousel from '@/components/AboutPage/TestimonialCarousel';
import FooterSection from '@/components/FooterSection';
import ScrollUp from '@/components/ScrollUp';
import Seo from '@/components/Seo';
import StickyHeader from '@/components/StickyHeader';

import Layout from '@/layouts/BlankLayout';

const AboutPage = () => {
  return (
    <Layout>
      <Seo templateTitle='MengQi' />

      <StickyHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialCarousel />
        <BrandSection />

        <section className='py-[80px] xl:py-[120px]'>
          <div className='container'>
            <div className='grid grid-cols-12 gap-y-[30px] gap-x-[15px]'>
              <div className='col-span-5'>
                <img className='h-full w-full rounded-[8px] object-cover' src='/images/template/properties-details/01.png' alt='gallery image' loading='lazy' />
              </div>
              <div className='col-span-5'>
                <img className='h-full w-full rounded-[8px] object-cover' src='/images/template/properties-details/02.png' alt='gallery image' loading='lazy' />
              </div>
              <div className='col-span-2'>
                <img className='h-full w-full rounded-[8px] object-cover' src='/images/template/properties-details/03.png' alt='gallery image' loading='lazy' />
              </div>

              <div className='col-span-2'>
                <img className='h-full w-full rounded-[8px] object-cover' src='/images/template/properties-details/06.png' alt='gallery image' loading='lazy' />
              </div>
              <div className='col-span-5'>
                <img className='h-full w-full rounded-[8px] object-cover' src='/images/template/properties-details/05.png' alt='gallery image' loading='lazy' />
              </div>
              <div className='col-span-5'>
                <img className='h-full w-full rounded-[8px] object-cover' src='/images/template/properties-details/04.png' alt='gallery image' loading='lazy' />
              </div>
            </div>
          </div>
        </section>

        <TeamSection />
        <NewsLetterSection />
      </main>

      <FooterSection />

      <ScrollUp />
    </Layout>
  );
};

export default AboutPage;
