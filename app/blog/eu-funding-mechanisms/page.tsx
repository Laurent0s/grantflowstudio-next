"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPost() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="text-sm text-primary font-semibold mb-4">EU Grants</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Understanding EU Funding Mechanisms
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Jane Smith</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 10, 2025</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80" 
              alt="EU Funding Mechanisms"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />

            <h2>Introduction to EU Funding</h2>
            <p>
              The European Union offers a vast array of funding opportunities designed to support innovation, 
              research, infrastructure development, and social initiatives across member states. Understanding 
              these mechanisms is crucial for organizations seeking to leverage EU resources effectively.
            </p>

            <h2>Main EU Funding Programs</h2>
            <p>
              EU funding is distributed through several major programs, each with specific objectives and target audiences:
            </p>

            <h3>1. Horizon Europe</h3>
            <p>
              The flagship research and innovation program with a budget of €95.5 billion for 2021-2027. 
              It focuses on three main pillars: Excellent Science, Global Challenges and European Industrial 
              Competitiveness, and Innovative Europe.
            </p>

            <h3>2. European Structural and Investment Funds (ESIF)</h3>
            <p>
              These funds aim to reduce regional disparities and support sustainable development. They include:
            </p>
            <ul>
              <li>European Regional Development Fund (ERDF)</li>
              <li>European Social Fund Plus (ESF+)</li>
              <li>Cohesion Fund</li>
              <li>European Agricultural Fund for Rural Development (EAFRD)</li>
              <li>European Maritime, Fisheries and Aquaculture Fund (EMFAF)</li>
            </ul>

            <h3>3. Erasmus+</h3>
            <p>
              Supporting education, training, youth, and sport with a budget of €26.2 billion, Erasmus+ 
              offers opportunities for mobility, cooperation, and policy development.
            </p>

            <h2>Application Process</h2>
            <p>
              Securing EU funding requires careful preparation and adherence to specific guidelines:
            </p>

            <ol>
              <li><strong>Identify the Right Program:</strong> Match your project goals with appropriate funding streams</li>
              <li><strong>Build Partnerships:</strong> Many programs require transnational consortia</li>
              <li><strong>Develop a Strong Proposal:</strong> Focus on innovation, impact, and European added value</li>
              <li><strong>Budget Carefully:</strong> Ensure realistic cost estimates and eligible expenses</li>
              <li><strong>Submit on Time:</strong> Respect strict deadlines and submission procedures</li>
            </ol>

            <h2>Key Success Factors</h2>
            <p>
              Based on our experience supporting hundreds of successful applications, we've identified critical factors:
            </p>

            <ul>
              <li><strong>Clear Objectives:</strong> Articulate specific, measurable, achievable, relevant, and time-bound (SMART) goals</li>
              <li><strong>Innovation:</strong> Demonstrate how your project goes beyond state-of-the-art</li>
              <li><strong>Impact:</strong> Show tangible benefits for target groups and society</li>
              <li><strong>Sustainability:</strong> Plan for long-term viability beyond the funding period</li>
              <li><strong>Excellence:</strong> Assemble a competent team with proven track records</li>
            </ul>

            <h2>Common Pitfalls to Avoid</h2>
            <p>
              Many applications fail due to preventable mistakes:
            </p>

            <ul>
              <li>Insufficient alignment with program priorities</li>
              <li>Weak partnership structures</li>
              <li>Unrealistic budgets or timelines</li>
              <li>Poor project management plans</li>
              <li>Inadequate dissemination strategies</li>
            </ul>

            <h2>How We Can Help</h2>
            <p>
              Our team of EU funding experts provides comprehensive support throughout the entire grant lifecycle:
            </p>

            <ul>
              <li>Program identification and eligibility assessment</li>
              <li>Partner search and consortium building</li>
              <li>Proposal writing and editing</li>
              <li>Budget development and financial planning</li>
              <li>Project management and reporting</li>
            </ul>

            <p>
              With our guidance, your organization can navigate the complex EU funding landscape with confidence 
              and maximize your chances of success.
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Ready to Apply for EU Funding?</h3>
              <p className="mb-4">
                Contact our experts for a free consultation on your project idea and funding opportunities.
              </p>
              <Link href="/contacts">
                <Button>Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

