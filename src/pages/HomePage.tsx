import React from 'react';
import { Hero } from '../components/Hero';
import { TrustIntro } from '../components/TrustIntro';
import { ServicesSection } from '../components/ServicesSection';
import { SolarFeatureSection } from '../components/SolarFeatureSection';
import { StatsSection } from '../components/StatsSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { SolarCalculator } from '../components/SolarCalculator';
import { CTASection } from '../components/CTASection';
import { ProjectItem, PageId } from '../types';

interface HomePageProps {
  projects: ProjectItem[];
  onNavigate: (page: PageId) => void;
  onOpenQuote: (service?: string) => void;
  onOpenCall: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onApplyCalcToQuote: (details: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  projects,
  onNavigate,
  onOpenQuote,
  onOpenCall,
  onSelectProject,
  onApplyCalcToQuote,
}) => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Hero Section */}
      <Hero
        onOpenQuote={() => onOpenQuote()}
        onExplore={() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Trust / Intro Section */}
      <TrustIntro onLearnMore={() => onNavigate('about')} />

      {/* 3. Services Section */}
      <ServicesSection onOpenQuote={onOpenQuote} />

      {/* 4. Solar Feature Section with Energy Flow Dynamic */}
      <SolarFeatureSection onExploreSolar={() => onNavigate('solar')} />

      {/* 5. Statistics Section */}
      <StatsSection />

      {/* 6. Why Power Ace Section */}
      <WhyUsSection />

      {/* 7. Process Timeline Section */}
      <ProcessTimeline />

      {/* 8. Interactive Solar Calculator */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SolarCalculator onApplyToQuote={onApplyCalcToQuote} />
        </div>
      </section>

      {/* 9. Project Showcase Section (Live Projects from Admin) */}
      <ProjectShowcase projects={projects} onSelectProject={onSelectProject} />

      {/* 10. Call to Action */}
      <CTASection onOpenQuote={() => onOpenQuote()} onOpenCall={onOpenCall} />
    </div>
  );
};
