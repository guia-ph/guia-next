'use client';

import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import HiringProcess from '@/widgets/HiringProcess';
import Story from '@/widgets/Story';
import Testimonials from '@/widgets/Testimonials';
import VideoTestimonials from '@/widgets/VideoTestimonials';
import Benefits from '@/widgets/Benefits';
import RemoteStaffingBenefits from '@/widgets/RemoteStaffingBenefits';
import Clients from '@/widgets/Clients';
import Approach from '@/widgets/Approach';
import ContactUs from '@/widgets/ContactUs';
import FAQ from '@/widgets/FAQ';
import CallToAction from '@/widgets/CallToAction';
import FluidCursor from '@/components/ui/FluidCursor'
import { GridBackground } from '@/components/ui/GridBackground'
import { NavBar } from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        <GridBackground />
        <div className="relative z-10">
          <NavBar>
          <Hero />
          <About />
          <Services />
          <HiringProcess />
          <Story />
          <Testimonials />
          <VideoTestimonials />
          <Benefits />
          <RemoteStaffingBenefits />
          <Clients />
          <Approach />
          <ContactUs />
          <FAQ />
          <CallToAction />
          </NavBar>
        </div>

        {/* disable cursor here */}
        <FluidCursor />
      </main>
    </>
  );
}
