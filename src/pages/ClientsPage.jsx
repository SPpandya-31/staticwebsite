
    import React from 'react';
    import { motion } from 'framer-motion';
    import { HeartHandshake as Handshake, Star } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';

    const clients = [
      { name: "Gujarat State Petronet Ltd.", logoDesc: "GSPL Logo", category: "Energy" },
      { name: "Adani Group", logoDesc: "Adani Group Logo", category: "Conglomerate" },
      { name: "Torrent Pharmaceuticals", logoDesc: "Torrent Pharma Logo", category: "Pharmaceuticals" },
      { name: "Zydus Cadila", logoDesc: "Zydus Cadila Logo", category: "Pharmaceuticals" },
      { name: "Reliance Industries Ltd.", logoDesc: "Reliance Industries Logo", category: "Conglomerate" },
      { name: "Larsen & Toubro", logoDesc: "L&T Logo", category: "Engineering & Construction" },
      { name: "Tata Motors", logoDesc: "Tata Motors Logo", category: "Automotive" },
      { name: "Amul", logoDesc: "Amul Dairy Logo", category: "Dairy" },
      { name: "Sun Pharmaceutical Industries Ltd.", logoDesc: "Sun Pharma Logo", category: "Pharmaceuticals" },
      { name: "Shapoorji Pallonji Group", logoDesc: "Shapoorji Pallonji Logo", category: "Construction" },
    ];

    const testimonials = [
      {
        quote: "Nirman Construction delivered our project ahead of schedule and with exceptional quality. Their professionalism is unmatched.",
        name: "R. Patel",
        company: "Director, Alpha Industries"
      },
      {
        quote: "The attention to detail and commitment to safety by Nirman's team was impressive. We highly recommend them.",
        name: "S. Shah",
        company: "CEO, Beta Corp"
      },
      {
        quote: "Working with Nirman Construction was a seamless experience. They understood our vision and executed it perfectly.",
        name: "A. Mehta",
        company: "Manager, Gamma Solutions"
      }
    ];

    const ClientsPage = () => {
      const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
      };

      const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
      
      const staggerContainerVariants = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } },
      };

      return (
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          className="bg-background text-foreground"
        >
          <header className="py-24 md:py-32 bg-gradient-to-r from-primary to-blue-700 text-center">
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-4xl md:text-5xl font-heading font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Our Esteemed Clients
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Building strong partnerships through trust, quality, and exceptional service.
              </motion.p>
            </div>
          </header>

          {/* Client Logos Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Trusted By Leading Organizations
              </motion.h2>
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center"
                variants={staggerContainerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center h-40 aspect-video"
                  >
                    <div className="w-24 h-12 mb-2 flex items-center justify-center">
                       <img  
                        className="max-w-full max-h-full object-contain" 
                        alt={client.logoDesc}
                       src="https://images.unsplash.com/photo-1554469384-e58fac150295?q=80&w=400&auto=format&fit=crop" />
                    </div>
                    <p className="text-sm font-medium text-center text-muted-foreground">{client.name}</p>
                    <p className="text-xs text-center text-secondary">{client.category}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                What Our Clients Say
              </motion.h2>
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={staggerContainerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card p-8 rounded-xl shadow-lg"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-secondary">{testimonial.company}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-primary text-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Handshake className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Partner With Us</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-blue-100">
                        Join our growing list of satisfied clients. Let's discuss how Nirman Construction can bring your next project to life with excellence and precision.
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                        <Link to="/contact">Become a Client</Link>
                    </Button>
                </motion.div>
            </div>
          </section>
        </motion.div>
      );
    };

    export default ClientsPage;
  