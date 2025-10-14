import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ChatWidget from './components/UI/ChatWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AdminProjectsPage from './pages/AdminProjectsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
          <Route path="/admin/projects" element={<AdminProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;