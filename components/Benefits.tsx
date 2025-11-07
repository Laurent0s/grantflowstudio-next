import { Award, Users, TrendingUp, Target } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: '10+ Years of Experience',
    description: 'Trusted expertise in grant consulting and project development',
  },
  {
    icon: TrendingUp,
    title: '€10M+ Attracted',
    description: 'Successfully secured funding for our clients',
  },
  {
    icon: Users,
    title: '20,000+ Trained',
    description: 'Professionals and organizations empowered through our programs',
  },
  {
    icon: Target,
    title: 'Strong Partnerships',
    description: 'Established connections with EU institutions and leading NGOs',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-background p-8 rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-glow">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

