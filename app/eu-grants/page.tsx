"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function EUGrants() {
  const programs = [
    {
      icon: Lightbulb,
      title: 'Horizon Europe',
      description: 'EU\'s key funding programme for research and innovation',
      focus: 'Research, innovation, and technology development',
      link: '/eu-grants/horizon-europe',
    },
    {
      icon: Users,
      title: 'Erasmus+',
      description: 'Supporting education, training, youth and sport in Europe',
      focus: 'Education, training, youth mobility',
    },
    {
      icon: Building2,
      title: 'Regional Development Fund',
      description: 'Strengthening economic, social and territorial cohesion',
      focus: 'Regional development and infrastructure',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">EU Grants</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Access comprehensive information about European Union grant programs. We specialize in helping 
            organizations navigate EU funding opportunities and requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="w-6 h-6 text-primary" />
                      {program.title}
                    </CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Focus:</strong> {program.focus}
                    </p>
                    {program.link && (
                      <Link href={program.link}>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

