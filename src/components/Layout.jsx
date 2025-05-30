
    import React, { useState, useEffect } from 'react';
    import { Link, NavLink, useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Building, Users, Briefcase, Wrench, Mail, Phone } from 'lucide-react';

    const navLinks = [
      { name: 'Home', path: '/', icon: Building },
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Services', path: '/services', icon: Wrench },
      { name: 'Projects', path: '/projects', icon: Briefcase },
      { name: 'Clients', path: '/clients', icon: Users },
      { name: 'Contact Us', path: '/contact', icon: Mail },
    ];

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const location = useLocation();

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      useEffect(() => {
        setIsOpen(false); 
      }, [location.pathname]);

      return (
        <motion.nav 
          className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center">
                <Building className={`h-8 w-8 mr-2 ${isScrolled ? 'text-primary' : 'text-primary'}`} />
                <span className={`text-2xl font-heading font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>Nirman</span>
                <span className={`text-2xl font-heading font-bold ${isScrolled ? 'text-primary' : 'text-accent'}`}>Construction</span>
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                       ${isActive ? (isScrolled ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground') : (isScrolled ? 'text-foreground hover:text-primary' : 'text-gray-200 hover:text-white hover:bg-white/10')}
                      `
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Button asChild variant={isScrolled ? "default" : "outline"} className={!isScrolled ? "border-accent text-accent hover:bg-accent hover:text-accent-foreground" : ""}>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
              <div className="md:hidden">
                <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-foreground' : 'text-white'}>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-background/95 backdrop-blur-md shadow-lg"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                         ${isActive ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'}`
                      }
                    >
                      <link.icon className="inline-block w-5 h-5 mr-2" />
                      {link.name}
                    </NavLink>
                  ))}
                  <Button asChild variant="default" className="w-full mt-2">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      );
    };

    const Footer = () => {
      return (
        <footer className="bg-gradient-to-r from-primary via-blue-700 to-blue-800 text-primary-foreground py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-heading text-xl font-bold mb-2">Nirman Construction</p>
                <p className="text-sm text-blue-200">Building the future, restoring the past. Quality, Trust, Client Satisfaction since 1998.</p>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold mb-2">Quick Links</p>
                <ul className="space-y-1">
                  {navLinks.slice(0,4).map(link => (
                     <li key={`footer-${link.name}`}>
                       <Link to={link.path} className="text-sm text-blue-200 hover:text-accent transition-colors">
                         {link.name}
                       </Link>
                     </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold mb-2">Contact Us</p>
                <address className="text-sm not-italic text-blue-200 space-y-1">
                  <p>D/432, City Center, Nr. S.R.P. Campus, Naroda Patia Road, Ahmedabad -382340 (Gujarat) INDIA</p>
                  <p><Phone size={14} className="inline mr-1" /> +91 9925112168</p>
                  <p><Mail size={14} className="inline mr-1" /> nirmanconstruction@yahoo.com</p>
                </address>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-500 text-center text-sm text-blue-300">
              <p>&copy; {new Date().getFullYear()} Nirman Construction. All rights reserved.</p>
              <p className="mt-1">Designed with <span className="text-accent">❤</span> by Hostinger Horizons</p>
            </div>
          </div>
        </footer>
      );
    };
    
    const Layout = ({ children }) => {
      const location = useLocation();
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;
  