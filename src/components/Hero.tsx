import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-aurora-3 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-3" />
            </span>
            Available for opportunities · 2025 — 2026
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient">Sameer Sahu.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full-stack developer crafting polished web experiences with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Node.js</span>, and applied{" "}
            <span className="text-foreground font-medium">AI/ML</span>. I turn ideas into fast,
            accessible products people actually want to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-aurora-1 to-aurora-2 text-primary-foreground hover:opacity-95 transition shadow-[0_0_40px_hsl(var(--aurora-1)/0.4)]"
            >
              <Sparkles size={18} />
              View my work
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-aurora-1 to-aurora-2 blur-xl opacity-50 -z-10 group-hover:opacity-80 transition" />
            </a>
            <a
              href="/Sameer_Sahu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium glass hover:bg-white/10 transition"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
          >
            {[
              { v: "1+", l: "Years building" },
              { v: "10+", l: "Projects shipped" },
              { v: "5+", l: "Tech stacks" },
              { v: "∞", l: "Curiosity" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.4 }, y: { duration: 2, repeat: Infinity } }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
        >
          Scroll <ArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
