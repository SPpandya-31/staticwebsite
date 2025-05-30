
    import React, { Suspense, lazy } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import { Toaster } from '@/components/ui/toaster';
    import { motion } from 'framer-motion';

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
    const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
    const ClientsPage = lazy(() => import('@/pages/ClientsPage'));
    const ContactPage = lazy(() => import('@/pages/ContactPage'));

    const PageLoader = () => (
      <div className="flex items-center justify-center h-screen bg-background">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );

    function App() {
      return (
        <Router>
          <Layout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </Layout>
          <Toaster />
        </Router>
      );
    }

    export default App;
  