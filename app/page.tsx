import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import LeadMagnet from '@/components/LeadMagnet';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Services />
      <LeadMagnet />
      <Stats />
      <Testimonials />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
}

