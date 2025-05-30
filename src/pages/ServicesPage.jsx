
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { HardHat, Layers, CheckCircle, Building2, Route as Road, Home } from 'lucide-react';

    const services = [
      {
        icon: <HardHat className="h-10 w-10 text-accent mb-4" />,
        title: "Construction Projects",
        description: "Full-scale project management and execution from inception to completion. We handle every detail to ensure your project is delivered on time and within budget.",
        details: ["Site Analysis & Feasibility Studies", "Design & Engineering Coordination", "Permitting & Regulatory Compliance", "Construction & Site Management", "Quality Control & Safety Assurance"]
      },
      {
        icon: <Building2 className="h-10 w-10 text-accent mb-4" />,
        title: "Industrial Construction",
        description: "Tailored solutions for complex industrial facilities. Our expertise ensures quality assurance and adherence to stringent industry standards.",
        details: ["Factory & Warehouse Construction", "Specialized Industrial Flooring", "Heavy Machinery Foundations", "Process Piping & Utility Installation", "Clean Room & Controlled Environments"]
      },
      {
        icon: <Layers className="h-10 w-10 text-accent mb-4" />,
        title: "Trimix Flooring",
        description: "Advanced flooring solutions using modern machinery for superior durability and finish. Ideal for high-traffic industrial and commercial spaces.",
        details: ["High-Strength Concrete Mixes", "Vibration & Compaction Techniques", "Power Floating & Troweling", "Dust-Proof & Abrasion-Resistant Finishes", "Large Area Pours"]
      },
      {
        icon: <Home className="h-10 w-10 text-accent mb-4" />,
        title: "Commercial Building Construction",
        description: "Expert design and functionality for modern commercial needs. We create spaces that are both aesthetically pleasing and highly functional.",
        details: ["Office Buildings & Complexes", "Retail Spaces & Shopping Malls", "Hotels & Hospitality Venues", "Mixed-Use Developments", "Renovation & Tenant Improvements"]
      },
      {
        icon: <Road className="h-10 w-10 text-accent mb-4" />,
        title: "Road Work & Infrastructure",
        description: "Building robust and reliable road networks and essential infrastructure to support community growth and development.",
        details: ["Highway & Urban Road Construction", "Bridge & Culvert Construction", "Drainage & Stormwater Systems", "Pavement & Asphalt Works", "Utility Infrastructure Development"]
      }
    ];

    const ServicesPage = () => {
      const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
      };

      const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
                Our Construction Services
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Delivering excellence in every phase of construction, tailored to your specific needs.
              </motion.p>
            </div>
          </header>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col bg-card hover:shadow-2xl transition-shadow duration-300">
                      <CardHeader className="items-center text-center">
                        {service.icon}
                        <CardTitle className="text-2xl font-heading text-primary">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-muted-foreground mb-4 text-center">{service.description}</CardDescription>
                        <ul className="space-y-2 mt-4">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 text-center">
                <motion.h2 
                    className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Ready to Build Your Next Project?
                </motion.h2>
                <motion.p 
                    className="text-lg text-muted-foreground max-w-xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Let Nirman Construction be your trusted partner. Contact us today for a consultation.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-yellow-400">
                        <Link to="/contact">Request a Quote</Link>
                    </Button>
                </motion.div>
            </div>
          </section>
        </motion.div>
      );
    };

    export default ServicesPage;
  