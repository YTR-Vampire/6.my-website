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
            src="https://www.visitbhutan.com/cms/images/7256visit%20bhutan%20zhemgang%2024.png" 
            alt="A Paradise where every soul deserves to rest and breath the air of happiness..."
            className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-xs uppercase tracking-widest bg-black/40 backdrop-blur px-4 py-2 inline-block">Zhemgang, Bhutan</p>
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
              <strong className="text-white">Yugel Tshering, 37,</strong> from Zhemgang, Bhutan, represents a rare synthesis of Himalayan nobility and international military service.
            </p>
            <p>
              His maternal lineage traces back to the <strong className="text-luxury-gold">3rd Kola Lama</strong>, a high-born Tibetan cleric, while his paternal background is rooted in disciplined service; his father was an <strong className="text-slate-200">Officer in the Nepal Gorkha Army</strong>, stationed in Bhutan on a strategic assignment with <strong className="text-slate-200">Project DANTAK (GREF)</strong> under the Government of India.
            </p>
            <p>
              Yugel possesses a unique, multi-cultural perspective deeply grounded in the history and geopolitical fabric of the region. He also embodies a <strong className="text-white">decade plus of exceptional skills</strong> in the hospitality sector as an Executive, accumulated in Dubai and Bhutan following his graduation in <strong className="text-white">B.Sc IT from UAE University via Bangalore University</strong>. He exemplifies professionalism, assiduity, integrity, and efficiency, coupled with a gracious, poised, and self-assured demeanor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-3xl font-serif text-white">14+</p>
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
