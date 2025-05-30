
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Phone, MapPin, Send } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
          toast({
            title: "Incomplete Form",
            description: "Please fill in all required fields.",
            variant: "destructive",
          });
          return;
        }
        // Simulate form submission
        console.log("Form data submitted:", formData);
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      };

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
        animate: { transition: { staggerChildren: 0.15 } },
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
                Get In Touch
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-blue-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                We're here to answer your questions and help you start your next construction project.
              </motion.p>
            </div>
          </header>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.div 
                className="grid md:grid-cols-2 gap-12 items-start"
                variants={staggerContainerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Contact Form */}
                <motion.div variants={itemVariants} className="bg-card p-8 rounded-xl shadow-xl">
                  <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-muted-foreground">Full Name</Label>
                      <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="mt-1"/>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-muted-foreground">Email Address</Label>
                        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" required className="mt-1"/>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-muted-foreground">Phone Number (Optional)</Label>
                        <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className="mt-1"/>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-muted-foreground">Subject</Label>
                      <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required className="mt-1"/>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-muted-foreground">Your Message</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your project..." required className="mt-1"/>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-yellow-400">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Details & Map */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <div className="bg-card p-8 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-heading font-semibold text-primary mb-6">Contact Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Address:</p>
                          <p>D/432, City Center, Nr. S.R.P. Campus, Naroda Patia Road, Ahmedabad -382340 (Gujarat) INDIA</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Phone:</p>
                          <a href="tel:+919925112168" className="hover:text-accent transition-colors">+91 9925112168</a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Email:</p>
                          <a href="mailto:nirmanconstruction@yahoo.com" className="hover:text-accent transition-colors">nirmanconstruction@yahoo.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card p-2 rounded-xl shadow-xl overflow-hidden">
                     <h3 className="text-xl font-heading font-semibold text-primary p-6 pb-2">Our Location</h3>
                     <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=72.6400%2C23.0500%2C72.6500%2C23.0600&layer=mapnik&marker=23.0550%2C72.6450"
                            width="100%"
                            height="350"
                            style={{ border:0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nirman Construction Location"
                        ></iframe>
                     </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      );
    };

    export default ContactPage;
  