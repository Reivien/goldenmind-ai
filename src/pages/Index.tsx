
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Monitor, MessageSquare, Users, PhoneCall, MessageCircle, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoCarousel from '../components/LogoCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { icon: Monitor, title: 'Website Design', description: 'Custom-built websites that convert visitors into customers' },
    { icon: MessageSquare, title: 'Review Requests', description: 'Automated review collection to build trust and credibility' },
    { icon: Users, title: 'Lead Capture', description: 'Advanced lead generation and qualification systems' },
    { icon: MessageCircle, title: 'Webchat', description: '24/7 automated chat support for instant customer engagement' },
    { icon: PhoneCall, title: 'Call Follow Up', description: 'Automated call tracking and follow-up systems' },
    { icon: Mic, title: 'AI Voice', description: 'Natural voice interactions powered by advanced AI technology' },
  ];

  return (
    <div className="relative bg-black text-white">
      <ParallaxBackground />
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text"
          >
            Transform Your Business with Smart AI Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Streamline your operations, capture more leads, and grow your business with our all-in-one AI Software
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/plans"
              className="inline-flex items-center px-8 py-4 bg-gold-600 text-white rounded-full hover:bg-gold-700 transition-colors"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" ref={ref} className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">Comprehensive solutions for your business growth</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gold-700/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 hover:scale-[1.02] hover:border-gold-400/50"
              >
                <service.icon className="w-12 h-12 text-gold-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">About GoldenMind AI</h2>
              <p className="text-gray-300 mb-6 text-lg">
                We're pioneers in AI-driven business solutions, helping companies transform their operations 
                through intelligent automation and cutting-edge technology.
              </p>
              <p className="text-gray-400 mb-8">
                Our team combines years of experience in artificial intelligence, business development, 
                and customer success to deliver solutions that not only meet your current needs but 
                scale with your future growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gold-400 mb-2">500+</h3>
                  <p className="text-gray-400">Businesses Transformed</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold-400 mb-2">99%</h3>
                  <p className="text-gray-400">Customer Satisfaction</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold-600/20 to-gold-400/10 rounded-2xl p-8 border border-gold-700/30">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                    24/7 AI-powered customer support
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                    Seamless integration with existing systems
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                    Proven ROI within 90 days
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                    Custom solutions tailored to your industry
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg">Simple, transparent pricing that grows with your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gold-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gold-400">$299</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Basic Website Design
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Lead Capture Forms
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Email Support
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Monthly Analytics
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full block text-center py-3 px-6 border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-black transition-colors"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-400/10 border border-gold-400 relative hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gold-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gold-400">$599</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Custom Website Design
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  AI Webchat Integration
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Review Request System
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Call Follow-up Automation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Priority Support
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full block text-center py-3 px-6 bg-gold-400 text-black rounded-lg hover:bg-gold-500 transition-colors font-semibold"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gold-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gold-400">$999</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Everything in Professional
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  AI Voice Technology
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Custom Integrations
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  Dedicated Account Manager
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-gold-400 mr-2" />
                  24/7 Phone Support
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full block text-center py-3 px-6 border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-black transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Ready to transform your business? Let's start the conversation.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneCall className="w-6 h-6 text-gold-400 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-gold-400 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400">contact@goldenmind.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-gold-400 mr-4" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-400/10 border border-gold-700/30">
                <h4 className="text-lg font-semibold mb-3">Quick Response Guarantee</h4>
                <p className="text-gray-300 text-sm">
                  We respond to all inquiries within 2 hours during business hours. 
                  For urgent matters, call us directly for immediate assistance.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gold-400 text-black rounded-lg hover:bg-gold-500 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
