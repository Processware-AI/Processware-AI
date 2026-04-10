/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AcademyPage from './pages/AcademyPage';
import MarketplacePage from './pages/MarketplacePage';
import AboutPage from './pages/AboutPage';
import PaymentPage from './pages/PaymentPage';
import ProjectAuditPage from './pages/ProjectAuditPage';
import AspiceCoursePage from './pages/AspiceCoursePage';

const LOGO_URL = "https://lh3.googleusercontent.com/aida/ADBb0uhl6JFd8pwmRRoAU7sExRat1320S1IeLZRY9-efULuLrm6Z5MiYAvvLo-tblZcLO40QB-mxiIGq7q1ciHq0OyTISNg3DDYlssPqUYheqx45ElkcR9EzXj9JwTFQD1UFwsYHb5g-RAcMWeC-Q61QUwNIQWjvfVMJ258UIFuG1fCeEIEr_X0Abrz7GKrIFk87meg1fhn-ANrLKuxda-ELxdCn5cQo8XhyMZ5oUvrwm5lUir7c2XRLZRul8KllNEZ7oiQrBlizFn0pCC8";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '아카데미', path: '/academy' },
    { name: '서비스', path: '/marketplace' },
    { name: '대시보드', path: '/dashboard' },
    { name: '재단 정보', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isHome ? "bg-transparent" : "bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center h-10">
          <img 
            src={LOGO_URL} 
            alt="Processware Logo" 
            className="h-full w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 hover:text-primary px-2 py-1 rounded-md",
                location.pathname === link.path 
                  ? "text-primary font-bold border-b-2 border-primary rounded-none" 
                  : "text-on-surface-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
            <div className="pulse-agent" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0sW0rhoE6A9qgR9Q1O_M-j3j7buZMOnCgkO96O7lvWfYCCClv7x1Cks7JGi5mW66VKxZ1rltppd9UpLG8AGawr6LGNC97mMYkxScu-tciXTY07_oQFnsCtTjcifViXLFf98byk-bkTg0tWGjzQgqT7itijCntzcp4_KLxsvrQ1vFXIy8wPQxRLGDQVX2KKwoLFsSAUQ7Vz-3VCL0TmDjQQlntV1xDiW0vNJtjCZS4eHCEANXh8f2N6nfbHVWF0ysbwY_cmnUvSljg" 
              alt="User" 
              className="w-8 h-8 rounded-full border border-outline-variant/20"
            />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold py-2",
                    location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-low py-16 px-6 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <img 
            src={LOGO_URL} 
            alt="Processware Logo" 
            className="h-8 w-auto object-contain mb-6"
            referrerPolicy="no-referrer"
          />
          <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
            알고리즘 규제 모니터링 및 전문 디지털 법학 분야의 확고한 권위자입니다. 규제 준수를 위한 정밀 엔지니어링을 제공합니다.
          </p>
        </div>
        <div>
          <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">법적 고지</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><Link to="/about" className="hover:text-primary transition-colors">개인정보 처리방침</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">규정 준수</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">이용 약관</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-6">시스템</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              정상 작동 중
            </li>
            <li>v2.4.0</li>
            <li>© 2024 Aegis Protocol</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/project-audit" element={<ProjectAuditPage />} />
            <Route path="/course/aspice" element={<AspiceCoursePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
