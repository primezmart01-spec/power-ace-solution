import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CallModal } from './components/CallModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminPanel } from './components/AdminPanel';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolarPage } from './pages/SolarPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CTASection } from './components/CTASection';
import { getStoredProjects, isAdminAuthenticated } from './services/projectService';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [projects, setProjects] = useState<ProjectItem[]>(() => getStoredProjects());
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [calculatorDetailsForQuote, setCalculatorDetailsForQuote] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync state with URL hash/path
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'solar', 'projects', 'why-us', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    return () => window.removeEventListener('hashchange', handleUrlChange);
  }, []);

  // Listen for project updates from Admin Panel
  useEffect(() => {
    const handleStorageUpdate = () => {
      setProjects(getStoredProjects());
    };
    window.addEventListener('powerace_projects_updated', handleStorageUpdate);
    return () => window.removeEventListener('powerace_projects_updated', handleStorageUpdate);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    setSelectedServiceForQuote(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleApplyCalcToQuote = (calcDetails: any) => {
    setCalculatorDetailsForQuote(calcDetails);
    setSelectedServiceForQuote('Solar Energy');
    setQuoteModalOpen(true);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleOpenAdminFromFooter = () => {
    if (isAdminAuthenticated()) {
      setAdminPanelOpen(true);
    } else {
      setAdminLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F1E36] flex flex-col justify-between selection:bg-[#FF6600] selection:text-white">
      {/* Floating Light Theme Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenCall={() => setCallModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            projects={projects}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenCall={() => setCallModalOpen(true)}
            onSelectProject={handleSelectProject}
            onApplyCalcToQuote={handleApplyCalcToQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onOpenCall={() => setCallModalOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onOpenQuote={handleOpenQuote} />
        )}

        {currentPage === 'solar' && (
          <SolarPage
            onOpenQuote={handleOpenQuote}
            onApplyCalcToQuote={handleApplyCalcToQuote}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            projects={projects}
            onSelectProject={handleSelectProject}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'why-us' && (
          <div className="pt-28 pb-20 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
                ENGINEERING DISCIPLINE
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#0F1E36] leading-tight mb-4">
                THE POWER ACE STANDARD.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Why homeowners and commercial facility managers in Islamabad and Rawalpindi trust Power Ace Solutions to engineer their power continuity.
              </p>
            </div>
            <WhyUsSection />
            <ProcessTimeline />
            <CTASection
              onOpenQuote={() => handleOpenQuote()}
              onOpenCall={() => setCallModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer with Discreet Admin Icon */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenAdmin={handleOpenAdminFromFooter}
      />

      {/* Customer Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setSelectedServiceForQuote(undefined);
          setCalculatorDetailsForQuote(null);
        }}
        initialService={selectedServiceForQuote}
        initialDetails={calculatorDetailsForQuote}
      />

      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setSelectedProject(null);
          handleOpenQuote(title);
        }}
      />

      {/* Admin Login Modal (Triggered ONLY via Footer Icon, blank inputs, no exposed login details) */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={() => {
          setAdminLoginOpen(false);
          setAdminPanelOpen(true);
        }}
      />

      {/* Admin Project Listing & Management Console */}
      <AdminPanel
        projects={projects}
        isOpen={adminPanelOpen}
        onClose={() => setAdminPanelOpen(false)}
        onProjectsUpdated={(updatedList) => setProjects(updatedList)}
      />
    </div>
  );
}
