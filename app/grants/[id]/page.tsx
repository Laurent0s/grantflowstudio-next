'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Users, Globe, Rocket, CheckCircle, Calendar, Euro, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Grant {
  uid: string;
  title: string;
  description: string;
  deadline_date: string;
  programme: string;
}

const HorizonEurope = () => {
  const [grant, setGrant] = useState<Grant | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchGrant() {
      const response = await fetch(`http://37.27.243.207:8000/grants/${id}`);
      const data = await response.json();
      setGrant(data);
    }
    fetchGrant();
  },[id]);
  console.log(grant);
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Excellent Science',
      description: 'Supporting frontier research and innovation through the European Research Council, Marie Skłodowska-Curie Actions, and Research Infrastructures.',
      funding: '€25.8 billion',
    },
    {
      icon: Globe,
      title: 'Global Challenges and European Industrial Competitiveness',
      description: 'Addressing climate change, health, digital transformation, and other societal challenges through collaborative research.',
      funding: '€53.5 billion',
    },
    {
      icon: Rocket,
      title: 'Innovative Europe',
      description: 'Boosting breakthrough innovations through the European Innovation Council and European innovation ecosystems.',
      funding: '€13.6 billion',
    },
  ];

  const eligibility = [
    'Universities and research institutions',
    'Small and medium-sized enterprises (SMEs)',
    'Large companies and industry',
    'Public bodies and government organizations',
    'Non-profit organizations and NGOs',
    'Individual researchers and innovators',
  ];

  const keyDates = [
    { date: 'February 2025', event: 'Spring call opens for Cluster 1: Health' },
    { date: 'April 2025', event: 'Deadline for ERC Starting Grants' },
    { date: 'June 2025', event: 'Marie Curie Postdoctoral Fellowships deadline' },
    { date: 'September 2025', event: 'EIC Accelerator cut-off date' },
    { date: 'November 2025', event: 'Winter call opens for Cluster 4: Digital, Industry & Space' },
  ];

  const benefits = [
    'Access to €95.5 billion in total funding (2021-2027)',
    'International collaboration opportunities',
    'Support for the entire innovation cycle',
    'Simplified application and reporting processes',
    'Networking with leading researchers and organizations',
    'Enhanced visibility and credibility',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{grant?.programme}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                The EU&apos;s key funding programme for research and innovation with a budget of €95.5 billion for 2021-2027
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Apply Now</Button>
                <Button size="lg" variant="outline">Download Guidelines</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">Programme Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              {grant?.description}
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="bg-muted/30 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Three Pillars of Horizon Europe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-smooth">
                    <CardHeader>
                      <div className="mb-4">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                      <CardTitle>{pillar.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <span className="text-primary font-semibold">{pillar.funding}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who Can Apply?</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Dates */}
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Important Dates 2025</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {keyDates.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-smooth">
                  <CardContent className="flex items-center gap-4 py-4">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{item.date}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* How We Can Help */}
        <div className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">How We Can Help You Succeed</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Navigating Horizon Europe can be complex. Our expert consultants provide comprehensive support throughout 
                the entire application process, from identifying the right funding opportunities to submitting a winning proposal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Proposal Writing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Expert assistance in crafting compelling proposals that meet all requirements
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Consortium Building</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Help finding and connecting with the right partners across Europe
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Euro className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Budget Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Strategic budget development and financial planning support
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Button size="lg">Contact Our Horizon Europe Experts</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HorizonEurope;