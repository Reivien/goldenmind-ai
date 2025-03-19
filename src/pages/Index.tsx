
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
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
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
      <section ref={ref} className="py-20 px-4 relative z-10">
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

      {/* Logo Carousel */}
      <LogoCarousel />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
