import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your Grant Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful organizations that trust us with their grant applications. 
            Let's turn your vision into funded reality.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:shadow-large transition-smooth group text-lg px-8"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

