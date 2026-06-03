'use client';

import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Benefits from '@/widgets/Benefits';
import Testimonials from '@/widgets/Testimonials';
import VideoTestimonials from '@/widgets/VideoTestimonials';
import Story from '@/widgets/Story';
import Clients from '@/widgets/Clients';
import Approach from '@/widgets/Approach';
import SavingsCalculator from '@/widgets/SavingsCalculator';
import ContactUs from '@/widgets/ContactUs';
import FAQ from '@/widgets/FAQ';
import CallToAction from '@/widgets/CallToAction';
import FluidCursor from '@/components/ui/FluidCursor';
import { GridBackground } from '@/components/ui/GridBackground';
import { NavBar } from '@/components/NavBar';

export function PageContent() {
  return (
    <main className="relative min-h-screen">
      <GridBackground />
      <div className="relative z-10">
        <NavBar>
          <Hero />
          <About />
          <Benefits />
          <Testimonials />
          <VideoTestimonials />
          <Story />
          <Clients />
          <Approach />
          <SavingsCalculator />
          <ContactUs />
          <FAQ />
          <CallToAction />
        </NavBar>
      </div>
      <FluidCursor />
    </main>
  );
}
