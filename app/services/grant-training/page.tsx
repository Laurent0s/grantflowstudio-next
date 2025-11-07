"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GraduationCap, ArrowLeft, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceDetail() {
  const trainingPrograms = [
    {
      title: 'Grant Writing Fundamentals',
      duration: '2 days',
      level: 'Beginner',
      description: 'Learn the basics of effective grant proposal writing and application strategies.',
    },
    {
      title: 'Advanced EU Funding',
      duration: '3 days',
      level: 'Advanced',
      description: 'Deep dive into complex EU funding mechanisms and successful application techniques.',
    },
    {
      title: 'Budget Development Workshop',
      duration: '1 day',
      level: 'Intermediate',
      description: 'Master the art of creating realistic and compliant project budgets.',
    },
    {
      title: 'Project Management for Grants',
      duration: '2 days',
      level: 'Intermediate',
      description: 'Essential project management skills for funded initiatives.',
    },
  ];

  const benefits = [
    'Expert-led sessions with experienced grant professionals',
    'Interactive workshops with real-world case studies',
    'Personalized feedback on your proposals',
    'Networking opportunities with other grant seekers',
    'Access to exclusive resources and templates',
    'Certificate of completion',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link href="/services">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <GraduationCap className="text-primary-foreground" size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Grant Training Programs
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive seminars and workshops designed to empower your team with the knowledge 
                  and skills needed to secure funding successfully.
                </p>
                <Link href="/contacts">
                  <Button size="lg">Enroll Now</Button>
                </Link>
              </div>
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                  alt="Grant Training"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-large"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Training?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Expert Instructors</CardTitle>
                  <CardDescription>
                    Learn from professionals with decades of combined experience in grant writing and funding.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Flexible Scheduling</CardTitle>
                  <CardDescription>
                    Choose from in-person, online, or hybrid formats to fit your team's schedule.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                  <CardDescription>
                    Our alumni have secured over €50 million in funding across various programs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Our Training Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary">{program.level}</span>
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">What You'll Gain</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Grant Writing Skills?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of professionals who have transformed their grant application success rates 
              through our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacts">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

