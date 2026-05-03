import { motion } from "motion/react";
import { Cpu, Hotel, Users, Map, Palette, Terminal } from "lucide-react";

const SKILLS = [
  { name: "Software Development", icon: <Terminal />, category: "Technical" },
  { name: "AI Implementation", icon: <Cpu />, category: "Technical" },
  { name: "Strategic Planning", icon: <Terminal />, category: "Leadership" },
  { name: "Digital Marketing", icon: <Palette />, category: "Strategy" },
  { name: "Luxury Hospitality", icon: <Hotel />, category: "Service" },
  { name: "Data Analytics", icon: <Users />, category: "Technical" },
];

const EXPERTISE = [
  "Management", "Creativity", "Negotiation", "Critical Thinking", "Leadership", "Data Analytics"
];

const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Dzongkha", level: "Native" },
  { name: "Nepali", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Core Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-luxury-gold mb-6 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-slate-950 transition-all">
                {skill.icon}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">{skill.category}</p>
              <h3 className="text-xl font-serif text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Expertise & Languages */}
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-serif border-l-4 border-luxury-gold pl-6">Core Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {EXPERTISE.map((item) => (
                <span key={item} className="px-6 py-3 rounded-full border border-white/10 text-slate-400 hover:border-luxury-gold/50 hover:text-white transition-all text-sm uppercase tracking-widest leading-none">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-serif border-l-4 border-luxury-gold pl-6">Linguistic Range</h2>
            <div className="space-y-6">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between group">
                  <span className="text-xl font-serif text-slate-300 group-hover:text-luxury-gold transition-colors">{lang.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500 uppercase tracking-widest">{lang.level}</span>
                    <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-luxury-gold" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
