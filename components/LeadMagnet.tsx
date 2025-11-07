"use client";

import { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

const LeadMagnet = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "Success!",
        description: "Your free guide has been sent to your email.",
      });
      setName('');
      setEmail('');
    }
  };

  return (
    <section id="grants" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-background rounded-2xl shadow-large p-8 md:p-12 border border-border">
            {/* Left - Book Cover */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-12 text-center shadow-large">
                  <div className="text-primary-foreground">
                    <Download size={64} className="mx-auto mb-6" />
                    <h3 className="font-montserrat font-bold text-3xl mb-4">
                      How to Get a Grant
                    </h3>
                    <p className="text-lg opacity-90">
                      Your Complete Guide to Grant Success
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="animate-fade-in">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Download Our <span className="text-primary">Free Guide</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Get practical tips and proven strategies to increase your chances of securing grants. 
                Learn from experts who have helped secure over €10M in funding.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary hover:shadow-glow transition-smooth"
                >
                  <Download className="mr-2" size={20} />
                  Download the Free Guide
                </Button>
              </form>

              <div className="mt-6 space-y-2">
                {['Proven strategies from experts', 'Step-by-step application process', 'Common mistakes to avoid'].map((item) => (
                  <div key={item} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;

