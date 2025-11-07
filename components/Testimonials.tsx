"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Olena Shevchenko',
    role: 'NGO Director',
    organization: 'Community Development Foundation',
    quote: 'Thanks to Time of Change, our NGO successfully obtained €500,000 for our community project. Their expertise and guidance were invaluable throughout the entire process.',
  },
  {
    name: 'Andriy Kovalenko',
    role: 'Executive Director',
    organization: 'Innovation Hub',
    quote: 'The training programs provided us with the knowledge and confidence to pursue international grants. We secured funding on our first try, which exceeded our expectations.',
  },
  {
    name: 'Natalia Bondarenko',
    role: 'Project Manager',
    organization: 'Education Initiative',
    quote: 'Professional, responsive, and incredibly knowledgeable. The team helped us navigate complex EU grant requirements and ensured our application was competitive and compelling.',
  },
  {
    name: 'Viktor Lysenko',
    role: 'Founder',
    organization: 'Social Enterprise Network',
    quote: 'Their project management support was crucial to our success. We not only secured the grant but also implemented it smoothly with their ongoing consultation and reporting assistance.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by organizations across Ukraine and Europe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl shadow-large p-8 md:p-12 border border-border">
            <Quote className="text-primary/20 absolute top-8 left-8" size={64} />
            
            <div className="relative z-10 animate-fade-in" key={currentIndex}>
              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-bold text-xl">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].organization}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={previousTestimonial}
                className="hover:border-primary hover:text-primary transition-smooth"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    suppressHydrationWarning
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="hover:border-primary hover:text-primary transition-smooth"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

