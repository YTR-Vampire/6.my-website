import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const QUALIFICATIONS = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "UAE University via Bangalore University",
    year: "Graduated",
    description: "Foundational higher education in software systems, networks, and technical architecture.",
    icon: GraduationCap,
  },
  {
    title: "Professional Tourism & Guide Certification",
    institution: "Royal Government of Bhutan",
    year: "Certified",
    description: "Expert level certification for high-altitude guiding and cultural interpretation in the Himalayas.",
    icon: Award,
  },
  {
    title: "Executive Leadership in Hospitality",
    institution: "Dubai / Thimphu",
    year: "10+ Years Experience",
    description: "Extensive professional development in international luxury hospitality standards and strategic management.",
    icon: BookOpen,
  }
];

export default function Qualification() {
  return (
    <section id="qualification" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Academic & Professional Standing
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Qualifications
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-luxury-gold mx-auto mt-6"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {QUALIFICATIONS.map((qual, idx) => (
            <motion.div
              key={qual.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-10 group hover:border-luxury-gold/40 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-luxury-gold mb-8 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-slate-950 transition-all duration-500">
                <qual.icon strokeWidth={1.5} />
              </div>
              <p className="text-xs font-mono text-luxury-gold uppercase tracking-widest mb-4">
                {qual.year}
              </p>
              <h3 className="text-2xl font-serif text-white mb-3 leading-tight">
                {qual.title}
              </h3>
              <p className="text-sm font-medium text-slate-300 mb-6 uppercase tracking-wider">
                {qual.institution}
              </p>
              <p className="text-slate-500 leading-relaxed font-light">
                {qual.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
