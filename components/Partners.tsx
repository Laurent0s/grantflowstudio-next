import { Building2 } from 'lucide-react';

const partners = [
  { name: 'European Union', alt: 'EU Partnership' },
  { name: 'United Nations', alt: 'UN Collaboration' },
  { name: 'World Bank', alt: 'World Bank Programs' },
  { name: 'USAID', alt: 'USAID Support' },
  { name: 'British Council', alt: 'British Council' },
  { name: 'Goethe Institut', alt: 'Goethe Institut' },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading international organizations and institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center p-8 bg-muted/50 rounded-xl border border-border hover:border-primary/50 hover:bg-background transition-smooth hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <Building2 
                  className="text-muted-foreground group-hover:text-primary transition-smooth mx-auto mb-2" 
                  size={40} 
                />
                <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-smooth">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            And many more organizations committed to supporting development and innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;

