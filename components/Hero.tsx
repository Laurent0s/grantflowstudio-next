"use client";

import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import heroSkyscrapersBg from '@/app/assets/hero-skyscrapers-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src={heroSkyscrapersBg} 
          alt="" 
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              We Help You Get{' '}
              <span className="text-primary">Grants</span> and Grow Your{' '}
              <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Professional support for NGOs, businesses, and initiatives to increase your chances of success. 
              Expert guidance every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-glow transition-smooth group text-lg px-8"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 hover:border-primary hover:text-primary transition-smooth group"
              >
                <BookOpen className="mr-2" size={20} />
                Learn How Grants Work
              </Button>
            </div>
          </div>

          {/* Right Column - Decorative Element */}
          <div className="hidden lg:block relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Stats Block - Right after photo */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">10+ Years</div>
              <div className="text-sm font-semibold text-foreground mb-1">of Experience</div>
              <div className="text-sm text-muted-foreground">Trusted expertise in grant consulting and project development</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">€10M+</div>
              <div className="text-sm font-semibold text-foreground mb-1">Attracted</div>
              <div className="text-sm text-muted-foreground">Successfully secured funding for our clients</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">20,000+</div>
              <div className="text-sm font-semibold text-foreground mb-1">Trained</div>
              <div className="text-sm text-muted-foreground">Professionals and organizations empowered through our programs</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">Strong</div>
              <div className="text-sm font-semibold text-foreground mb-1">Partnerships</div>
              <div className="text-sm text-muted-foreground">Established connections with EU institutions and leading NGOs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

