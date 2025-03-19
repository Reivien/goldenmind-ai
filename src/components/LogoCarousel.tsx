
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  CreditCard,
  DollarSign,
  Wallet
} from 'lucide-react';

interface LogoItemProps {
  icon: React.ElementType;
  name: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ icon: Icon, name }) => {
  return (
    <div className="flex items-center justify-center mx-8 min-w-[160px]">
      <div className="flex flex-col items-center">
        <Icon className="w-12 h-12 text-gray-100/80 hover:text-gold-400 transition-colors duration-300" />
        <span className="mt-2 text-xs text-gray-400">{name}</span>
      </div>
    </div>
  );
};

const LogoCarousel: React.FC = () => {
  const logos: LogoItemProps[] = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Twitter, name: 'X' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: CreditCard, name: 'PayPal' },
    { icon: Wallet, name: 'Stripe' },
    { icon: DollarSign, name: 'Square' },
  ];

  return (
    <div className="w-full py-16 overflow-hidden bg-gray-950/50 border-t border-b border-gold-700/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl font-semibold mb-2">Trusted Worldwide</h3>
        <p className="text-gray-400">Our solutions integrate with leading platforms and payment providers</p>
      </motion.div>
      
      <div className="relative w-full overflow-hidden">
        <div className="w-[calc(250px*14)] flex items-center animate-scroll hover:pause">
          {logos.map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} icon={logo.icon} name={logo.name} />
          ))}
          {logos.map((logo, index) => (
            <LogoItem key={`${logo.name}-duplicate-${index}`} icon={logo.icon} name={logo.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
