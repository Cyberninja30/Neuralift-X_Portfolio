import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl py-12 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <img src={logoImage} alt="Neuralift-X" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Neuralift<span className="text-primary">-X</span>
              </span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed">
              Forging the bridge between biological cognition and synthetic intelligence.
              We are the architects of the post-human era.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Platform</h3>
            <ul className="space-y-4">
              {['Neural Core', 'Quantum Mesh', 'Documentation', 'API Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 Neuralift-X. All systems nominal.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
