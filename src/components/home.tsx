import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with mountain feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/60 to-slate-950 z-10" />
        <img 
          src="https://www.visithimalayastrek.com/uploads/galleries/gallery-1655700706.jpeg" 
          alt="Himalayan Mountains"
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-6"
        >
          Hospitality Executive | Professional Guide | Tech Architect
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif leading-tight mb-8"
        >
          <span className="text-gradient font-medium tracking-tighter">Yugel Tshering</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed font-light"
        >
          Synthesizing Himalayan noble heritage and international military discipline 
          with world-class hospitality and software architecture.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
