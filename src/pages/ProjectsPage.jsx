
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { CalendarDays, MapPin } from 'lucide-react';

    const projects = [
      { name: "LINCON PHARMA", location: "Ahmedabad", year: 2015, category: "Industrial", imageDesc: "Exterior view of Lincon Pharma facility", imageAlt: "Lincon Pharma building" },
      { name: "HEAL MAX PVT LTD", location: "Ahmedabad", year: 2024, category: "Commercial", imageDesc: "Modern facade of Heal Max Pvt Ltd office", imageAlt: "Heal Max Pvt Ltd office" },
      { name: "KAUSHIK ENG. WORKS", location: "Sanand", year: 2018, category: "Industrial", imageDesc: "Large scale Kaushik Engineering Works plant", imageAlt: "Kaushik Engineering Works plant" },
      { name: "PHONIX FLEXIBLE (P) LTD.", location: "Ahmedabad", year: 2018, category: "Industrial", imageDesc: "Phonix Flexible packaging unit", imageAlt: "Phonix Flexible unit" },
      { name: "BMJ CABLE", location: "Mirzapur", year: 2024, category: "Industrial", imageDesc: "BMJ Cable manufacturing facility", imageAlt: "BMJ Cable facility" },
      { name: "SKY HIGH TOWER", location: "Ahmedabad", year: 2022, category: "Residential", imageDesc: "Luxury skyscraper Sky High Tower", imageAlt: "Sky High Tower residential building" },
      { name: "CITY GENERAL HOSPITAL", location: "Gandhinagar", year: 2020, category: "Institutional", imageDesc: "City General Hospital main building", imageAlt: "City General Hospital" },
      { name: "GRAND LUXE HOTEL", location: "Surat", year: 2023, category: "Commercial", imageDesc: "Facade of Grand Luxe Hotel", imageAlt: "Grand Luxe Hotel" },
    ];

    const ProjectsPage = () => {
      const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
      };

      const cardVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
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
                Our Portfolio of Excellence
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Showcasing a diverse range of successfully completed projects across Gujarat.
              </motion.p>
            </div>
          </header>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden bg-card hover:shadow-2xl transition-shadow duration-300 group">
                      <div className="relative h-64 w-full overflow-hidden">
                        <img  
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                          alt={project.imageAlt}
                         src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-md">{project.category}</span>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl font-heading text-primary">{project.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          <div className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-2 text-secondary" /> {project.location}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">A landmark project showcasing our commitment to quality and innovation in {project.category.toLowerCase()} construction.</p>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <div className="flex items-center text-sm text-secondary font-medium">
                          <CalendarDays className="h-4 w-4 mr-2" /> Completed: {project.year}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      );
    };

    export default ProjectsPage;
  