import { motion } from "motion/react";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-gradient">Let's Define the Future.</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Available for executive consulting, AI transformation strategies, 
            and collaborative ventures high in the Himalayas.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
          <a href="mailto:yugel.tshering0@gmail.com" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold transition-colors group">
            <Mail className="text-slate-400 group-hover:text-luxury-gold" />
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/5 pt-12">
          <p className="text-xs text-slate-600 uppercase tracking-widest italic">
            &copy; 2026 Yugel Tshering. Crafted with Digital & Himalayan Roots.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500 hover:text-luxury-gold transition-colors group"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
