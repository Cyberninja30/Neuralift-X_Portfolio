import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Technology', href: '#technology' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300`}
    >
      <div className={`
        relative flex items-center justify-between px-6 py-3 rounded-full
        backdrop-blur-xl border border-white/10 transition-all duration-300
        ${isScrolled ? 'bg-black/80 w-full max-w-5xl shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'bg-transparent w-full max-w-7xl border-transparent'}
      `}>

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10 group-hover:border-primary/50 transition-colors">
            <img src={logoImage} alt="Neuralift-X" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
            Neuralift<span className="text-primary">-X</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={() => window.open('https://neuralift-x-lfrc.vercel.app/', '_blank')}
            className="px-6 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-black transition-all duration-300 font-medium text-sm"
          >
            Launch Console
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full right-0 mt-4 w-64 p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 flex flex-col gap-4 shadow-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => window.open('https://neuralift-x-lfrc.vercel.app/', '_blank')}
                className="w-full px-6 py-2 rounded-lg bg-primary text-black font-bold hover:bg-primary/80 transition-colors"
              >
                Launch Console
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
