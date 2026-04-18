import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2rem] p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-aurora-1/30 blur-[100px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-aurora-2/30 blur-[100px]" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="text-sm font-mono text-aurora-3 mb-4">/ 05 — let's talk</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Have an idea? <br />
              <span className="text-gradient">Let's build it together.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Open to internships, freelance projects, and collaborations. Reach out — I usually reply within a day.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sameer.sahu989826@gmail.com"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-aurora-1 to-aurora-2 text-primary-foreground hover:opacity-95 transition shadow-[0_0_40px_hsl(var(--aurora-1)/0.4)]"
              >
                <Mail size={18} />
                sameer.sahu989826@gmail.com
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <a
                href="https://github.com/sameer-sahu25"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-xl glass grid place-items-center hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-xl glass grid place-items-center hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="/Sameer_Sahu_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="h-11 px-4 rounded-xl glass grid place-items-center hover:bg-white/10 transition text-sm"
              >
                Resume PDF
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Sameer Sahu. Crafted with React & Framer Motion.</div>
          <div className="font-mono text-xs">Jabalpur, India · +91 98982 68989</div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
