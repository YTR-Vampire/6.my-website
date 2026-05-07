import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-luxury-gold/10 rounded-2xl blur-2xl group-hover:bg-luxury-gold/20 transition-all" />
          <img 
            src="https://scontent.fpbh2-1.fna.fbcdn.net/v/t39.30808-6/480006286_648127891110150_27150918240275286_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=G_sBQCepGJMQ7kNvwHGLM_P&_nc_oc=AdrZWmkctqp8YT_eLr-l8hb0VyAsDnsgXVLdRCPXX130QYcVFDu1rmlcf8OOj2iJ-MyvFkKrRwfy8kJyszHr2ht9&_nc_zt=23&_nc_ht=scontent.fpbh2-1.fna&_nc_gid=iCyHrzCs37CsH7UnMI4fJA&_nc_ss=7b2a8&oh=00_Af6Dz4WsLiPg8pfc3qN9gfSm07_nXMs-feFl0FGPSLpfBQ&oe=6A0283ED" 
            alt="Yugel Tshering - Professional Portrait"
            className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-xs uppercase tracking-widest bg-black/40 backdrop-blur px-4 py-2 inline-block">Yugel Tshering</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">A Story of Roots & Reach</h2>
            <div className="w-20 h-1 bg-luxury-gold" />
          </div>

          <div className="space-y-6 text-slate-400 leading-relaxed font-light text-lg">
            <p>
              <strong className="text-white">Yugel Tshering, 37,</strong> a Strategic Executive with <strong className="text-luxury-gold">15 years of experience</strong> in high-level stakeholder management, cross-border business development, and luxury brand positioning.
            </p>
            <p>
              Originally from Zhemgang, Bhutan, his background represents a rare synthesis of Himalayan nobility and international military service. His maternal lineage traces back to the <strong className="text-luxury-gold">3rd Kola Lama</strong>, while his paternal roots are in the <strong className="text-slate-200">Nepal Gorkha Army</strong> (Project DANTAK).
            </p>
            <p>
              Yugel combines a deep technical foundation in <strong className="text-white">advanced AI application skills</strong> with world-class hospitality expertise. He has a proven track record in navigating complex international markets, specifically within the UAE and South Asia, driving modernized trade and diplomatic initiatives with poise and integrity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-3xl font-serif text-white">15+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white">Bhutan</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Home & HQ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}