import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    path: '#home',
    label: 'Home'
  }, {
    path: '#about',
    label: 'About'
  }, {
    path: '#services',
    label: 'Services'
  }, {
    path: '#plans',
    label: 'Plans'
  }, {
    path: '#contact',
    label: 'Contact'
  }];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  return <motion.header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gold-400">GoldenMind AI</NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => 
              <a 
                key={item.path} 
                href={item.path} 
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-white hover:text-gold-400 transition-colors"
              >
                {item.label}
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }}>
            <div className="container mx-auto px-4 py-4">
              {navItems.map(item => 
                <a 
                  key={item.path} 
                  href={item.path} 
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="block py-3 text-white hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          </motion.div>}
      </div>
    </motion.header>;
}