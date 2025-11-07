"use client";

import { GraduationCap, FileText, Database, Briefcase, FileCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const services = [
  {
    icon: GraduationCap,
    title: 'Grant Training',
    description: 'Comprehensive seminars and workshops on grant writing, fundraising strategies, and application best practices.',
    slug: '/services/grant-training',
  },
  {
    icon: FileText,
    title: 'Project Development',
    description: 'Expert assistance in drafting compelling grant applications and project proposals that stand out.',
    slug: null,
  },
  {
    icon: Database,
    title: 'Information Support',
    description: 'Access to extensive databases of grants, tenders, and funding opportunities from EU and international sources.',
    slug: null,
  },
  {
    icon: Briefcase,
    title: 'Project Management',
    description: 'Professional supervision and execution support for your funded projects from start to completion.',
    slug: null,
  },
  {
    icon: FileCheck,
    title: 'Reporting & Accountability',
    description: 'Comprehensive financial and narrative reporting services to ensure compliance and transparency.',
    slug: null,
  },
  {
    icon: MessageCircle,
    title: 'Consulting',
    description: 'Personalized advice and strategic guidance tailored to your organization\'s unique needs and goals.',
    slug: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for every stage of your grant journey, from training to successful project completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-background p-8 rounded-xl shadow-soft hover:shadow-large transition-smooth border border-border hover:border-primary/50 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth">
                  <Icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                {service.slug ? (
                  <Link href={service.slug}>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary group/btn p-0 h-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-smooth" size={16} />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary group/btn p-0 h-auto"
                    disabled
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-smooth" size={16} />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

