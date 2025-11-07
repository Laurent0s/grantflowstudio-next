"use client";

import { useEffect, useRef, useState } from 'react';
import { Users, Award, Euro, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: 1000,
    suffix: '+',
    label: 'Trainings Conducted',
  },
  {
    icon: Users,
    value: 20000,
    suffix: '+',
    label: 'Clients Served',
  },
  {
    icon: Euro,
    value: 10,
    suffix: 'M+',
    label: 'Grants Secured',
  },
  {
    icon: Briefcase,
    value: 10,
    suffix: '+',
    label: 'Years of Excellence',
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, hsl(var(--primary) / 0.95) 0%, hsl(var(--secondary) / 0.95) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex w-16 h-16 rounded-full bg-white/20 items-center justify-center mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="font-montserrat font-bold text-5xl text-white mb-2">
                  {isVisible && <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export default Stats;

