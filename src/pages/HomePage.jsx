
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ArrowRight, CheckCircle } from 'lucide-react';

    const MotionButton = motion(Button);

    const HomePage = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
      };

      return (
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <motion.section 
            className="relative flex items-center justify-center text-center py-32 md:py-48 bg-gradient-to-br from-primary via-blue-700 to-blue-800 text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 opacity-20">
              <img  
                className="w-full h-full object-cover" 
                alt="Abstract construction site patterns"
               src="https://images.unsplash.com/photo-1600247718040-54e80b3ea059" />
            </div>
            
            <motion.div 
              className="relative z-10 container mx-auto px-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 leading-tight"
                variants={itemVariants}
              >
                Building Your Vision, <span className="text-accent">Brick by Brick</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-blue-100"
                variants={itemVariants}
              >
                Established in 1998, Nirman Construction is a reputed civil contractor handling industrial, residential, commercial, hospital, and institutional projects across Gujarat.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
              >
                <MotionButton asChild size="lg" className="bg-accent text-accent-foreground hover:bg-yellow-400 shadow-lg transform hover:scale-105 transition-transform duration-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </MotionButton>
                <MotionButton asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/projects">View Our Projects</Link>
                </MotionButton>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                Why Nirman Construction?
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Decades of Experience", description: "Over 25 years of successfully delivering diverse construction projects.", icon: "🏗️" },
                  { title: "Quality Assurance", description: "Committed to the highest standards of quality and safety in every build.", icon: "🛡️" },
                  { title: "Client-Centric Approach", description: "We prioritize your vision and satisfaction, ensuring transparent communication.", icon: "🤝" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Featured Projects Teaser */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                Our Featured Work
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "LINCON PHARMA, Ahmedabad", year: 2015, imageAlt: "Lincon Pharma building exterior", imageDesc: "Modern pharmaceutical facility exterior" },
                  { name: "HEAL MAX PVT LTD, Ahmedabad", year: 2024, imageAlt: "Heal Max Pvt Ltd modern office", imageDesc: "Contemporary office building facade" },
                  { name: "KAUSHIK ENG. WORKS, Sanand", year: 2018, imageAlt: "Kaushik Engineering Works industrial unit", imageDesc: "Large industrial engineering workshop" },
                ].map((project, index) => (
                  <motion.div 
                    key={index}
                    className="bg-card rounded-xl shadow-lg overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img  
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        alt={project.imageAlt}
                       src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <span className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded">{project.year}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-semibold text-primary mb-1">{project.name}</h3>
                      <Link to="/projects" className="text-sm text-accent hover:underline">
                        View Details <ArrowRight className="inline h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button asChild size="lg" variant="default">
                  <Link to="/projects">Explore All Projects</Link>
                </Button>
              </motion.div>
            </div>
          </section>

        </div>
      );
    };

    export default HomePage;
  