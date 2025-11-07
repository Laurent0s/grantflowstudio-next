"use client";

import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Image from 'next/image';
import logo from '@/app/assets/logo.webp';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src={logo} 
                alt="Center for Development - Time of Change" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Empowering organizations to secure funding and achieve their goals through expert guidance and proven strategies.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Success Stories', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="font-medium">Kyiv Office</div>
                  <div className="text-secondary-foreground/80 text-sm">Shevchenko Blvd 12, Kyiv</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="font-medium">Lviv Office</div>
                  <div className="text-secondary-foreground/80 text-sm">Freedom Ave 28, Lviv</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:+380441234567" className="hover:text-primary transition-smooth">
                  +380 44 123 45 67
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:info@timeofchange.org" className="hover:text-primary transition-smooth">
                  info@timeofchange.org
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Stay updated with the latest grant opportunities and success stories.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button className="w-full gradient-primary hover:shadow-glow transition-smooth">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/70 text-sm">
              © 2025 Center for Development &quot;Time of Change&quot;. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

