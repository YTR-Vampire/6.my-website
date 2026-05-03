import { motion } from "motion/react";
import { Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Pelsup Training ~ Guardians of Prosperity",
    company: "WING IX | Pelrithang | Bhutan",
    period: "2026",
    desc: "Economic Contribution & Nation Building: Utilizing specialized technical skills to modernize traditional sectors and solving local challenges through innovation and leadership.",
    type: "service"
  },
  {
    title: "CEO",
    company: "Himalayan Realm Ventures | Thimphu | Bhutan",
    period: "2025 – Present",
    desc: "Directing strategic operations and business development for a diverse venture portfolio. Leading the integration of AI-driven efficiencies and digital transformation.",
    type: "work"
  },
  {
    title: "AI Training",
    company: "Desuung Skilling Programme (DSP) | Thimphu | Bhutan",
    period: "2026",
    desc: "Advanced Training in Generative AI, Prompt Engineering, and AI-driven business automation.",
    type: "edu"
  },
  {
    title: "Director of Sales & Marketing",
    company: "Yarkay IHCL SeleQtions (Taj) | Thimphu | Bhutan",
    period: "2021 – 2024",
    desc: "Orchestrated sales strategies and brand positioning for a premier luxury property. Managed high-value international accounts during post-pandemic recovery.",
    type: "work"
  },
  {
    title: "Desuup Integrated Training ~ Guardians of Peace",
    company: "RBPTI | Jigmeling | Bhutan",
    period: "2020",
    desc: "National Security & Community Service: Specialized training in Disaster Management, First Response, and maintaining public harmony as a member of the national volunteer force.",
    type: "service"
  },
  {
    title: "Front Office Manager",
    company: "Ariya Hotel Pvt. Ltd. | Thimphu | Bhutan",
    period: "2020",
    desc: "Directed guest services and team operations to ensure seamless high-end experiences.",
    type: "work"
  },
  {
    title: "Guest Relation Executive",
    company: "Taj Tashi | Thimphu | Bhutan",
    period: "2015 – 2019",
    desc: "Enhanced guest satisfaction by providing personalized luxury service and resolving concerns for international clientele.",
    type: "work"
  },
  {
    title: "Front Office Agent",
    company: "Ritz Carlton DIFC | Dubai | UAE",
    period: "2011 – 2014",
    desc: "Managed guest arrivals, departures, and inquiries in a world-class luxury environment.",
    type: "work"
  },
  {
    title: "B.Sc. in Software Engineering",
    company: "UAE University | Dubai | UAE",
    period: "2011",
    desc: "Core focus: Software architecture, system design, and computational logic. Graduated via Bangalore University on a full ride scholarship.",
    type: "edu"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Professional Odyssey</h2>
          <p className="text-slate-500 uppercase tracking-[0.2em] text-sm">Leadership, Service & Technical Mastery</p>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-950 bg-luxury-gold z-10 hidden md:block" />

              <div className="flex-1 md:w-1/2">
                <div className="glass-card p-8 hover:border-luxury-gold/50 transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-4 text-luxury-gold">
                    {exp.type === "work" && <Briefcase size={18} />}
                    {exp.type === "edu" && <GraduationCap size={18} />}
                    {exp.type === "service" && <ShieldCheck size={18} />}
                    <span className="text-xs font-mono uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-1 group-hover:text-luxury-gold transition-colors leading-tight">{exp.title}</h3>
                  <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}