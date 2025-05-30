
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Award, Target, Users, CheckSquare } from 'lucide-react';

    const AboutPage = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
      };

      const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      };

      return (
        <div className="bg-background text-foreground">
          {/* Page Header */}
          <header className="py-24 md:py-32 bg-gradient-to-r from-primary to-blue-700 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="container mx-auto px-4"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">About Nirman Construction</h1>
              <p className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
                Building Gujarat's landmarks with precision and passion since 1998.
              </p>
            </motion.div>
          </header>

          {/* Company Background */}
          <motion.section 
            className="py-16 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">Our Journey</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Established in 1998, Nirman Construction has grown from a modest enterprise into a leading civil contractor in Gujarat. For over two decades, we have been at the forefront of constructing state-of-the-art facilities and infrastructure.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our portfolio spans a wide range of projects, including complex industrial structures, modern road networks, luxurious residential bungalows, iconic skyscrapers, functional institutional buildings, and advanced healthcare facilities. Each project is a testament to our commitment to excellence and innovation.
                </p>
              </motion.div>
              <motion.div 
                className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl"
                variants={itemVariants}
              >
                <img  
                  className="w-full h-full object-cover" 
                  alt="Team of construction workers planning"
                 src="https://images.unsplash.com/photo-1581093196867-ca3dba3c721b" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold">
                  Founded: 1998
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Mission & Values */}
          <motion.section 
            className="py-16 md:py-24 bg-muted"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">Our Guiding Principles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div className="p-8 bg-card rounded-xl shadow-lg text-center" variants={itemVariants}>
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To provide optimum quality construction services and ensure timely project completion, exceeding client expectations through innovation and dedication.</p>
                </motion.div>
                <motion.div className="p-8 bg-card rounded-xl shadow-lg text-center" variants={itemVariants}>
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">Quality</h3>
                  <p className="text-muted-foreground">We are committed to upholding the highest standards of quality in materials, workmanship, and project management.</p>
                </motion.div>
                <motion.div className="p-8 bg-card rounded-xl shadow-lg text-center" variants={itemVariants}>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">Client Satisfaction</h3>
                  <p className="text-muted-foreground">Our clients are at the heart of everything we do. We strive to build lasting relationships based on trust and mutual respect.</p>
                </motion.div>
                 <motion.div className="p-8 bg-card rounded-xl shadow-lg text-center md:col-span-2 lg:col-span-1 lg:col-start-2" variants={itemVariants}>
                  <CheckSquare className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">Trust</h3>
                  <p className="text-muted-foreground">We build trust through transparency, reliability, and consistently delivering on our promises.</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Core Focus */}
          <motion.section 
            className="py-16 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary text-center mb-12">Our Core Focus Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Industrial Construction", "Road Work", "Luxurious Bungalows", 
                  "Skyscrapers", "Institutional Buildings", "Hospitals"
                ].map((focus, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl font-heading font-medium text-primary">{focus}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      );
    };

    export default AboutPage;
  