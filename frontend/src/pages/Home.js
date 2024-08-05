import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import HealthPackagesSection from '../components/HealthPackagesSection';
import BlogsSection from '../components/BlogsSection';

const Home = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header scrollToFooter={scrollToFooter} />
      <HeroSection />
      <ServicesSection />
      <HealthPackagesSection />
      <BlogsSection />
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;