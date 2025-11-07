import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring quality results for our clients.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in building strong partnerships and working together towards common goals.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously seek creative solutions and embrace new approaches to grant consulting.',
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We are driven by the positive change our work creates in communities and organizations.',
    },
  ];

  const milestones = [
    { year: '2013', event: 'Founded Center for Development - Time of Change' },
    { year: '2015', event: 'Secured first €1M in funding for clients' },
    { year: '2017', event: 'Expanded to Brussels office, strengthened EU connections' },
    { year: '2019', event: 'Trained 10,000th professional in grant writing' },
    { year: '2021', event: 'Achieved €10M milestone in total funding secured' },
    { year: '2023', event: 'Established partnerships with major EU institutions' },
  ];

  const team = [
    {
      name: 'Dr. Maria Schmidt',
      role: 'Founder & CEO',
      description: 'Expert in EU grant programs with 15+ years of experience in project development.',
    },
    {
      name: 'John Anderson',
      role: 'Head of Grant Consulting',
      description: 'Specialized in Horizon Europe and innovation funding mechanisms.',
    },
    {
      name: 'Sarah Williams',
      role: 'Training Director',
      description: 'Passionate about empowering professionals through comprehensive training programs.',
    },
    {
      name: 'Michael Chen',
      role: 'Project Development Lead',
      description: 'Skilled in creating compelling proposals and managing complex EU projects.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Empowering organizations and individuals through expert grant consulting and comprehensive training programs since 2013.
          </p>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                The Center for Development - Time of Change was founded in 2013 with a clear vision: to bridge the gap between organizations with impactful ideas and the funding opportunities that could bring those ideas to life.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small consulting firm has grown into a leading grant consulting organization, working with clients across Europe and beyond. We've helped secure over €10 million in funding and trained more than 20,000 professionals in the art and science of grant writing and project development.
              </p>
              <p className="text-muted-foreground">
                Today, we maintain strong partnerships with EU institutions, international NGOs, and leading organizations, positioning us at the forefront of grant consulting and development work.
              </p>
            </div>
            <div>
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower organizations and individuals by providing expert guidance in navigating complex funding landscapes, developing compelling proposals, and building sustainable projects that create lasting positive impact in communities worldwide.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading partner for organizations seeking to maximize their impact through strategic funding and exceptional project development, creating a world where great ideas have the resources they need to succeed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-muted/30 py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                    <CardHeader>
                      <div className="mx-auto mb-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-20 text-primary font-bold text-lg">{milestone.year}</div>
                  <div className="flex-1 pb-6 border-l-2 border-border pl-6 relative group-last:border-transparent">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

