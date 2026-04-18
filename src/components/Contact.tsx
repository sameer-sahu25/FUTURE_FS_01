import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Sameer,\n\n${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:sameer.sahu989826@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2rem] p-8 md:p-14 overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-aurora-1/30 blur-[100px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-aurora-2/30 blur-[100px]" />

          <div className="relative grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="text-sm font-mono text-aurora-3 mb-4">/ 05 — let's talk</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] italic">
                Have an idea?<br />
                <span className="text-gradient not-italic">Let's build it.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Open to internships, freelance and collaborations. Drop a message and your mail app
                will open pre-filled — I usually reply within a day.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:sameer.sahu989826@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/90 hover:text-foreground"
                >
                  <span className="h-9 w-9 rounded-xl glass grid place-items-center"><Mail size={16} /></span>
                  sameer.sahu989826@gmail.com
                </a>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com/sameer-sahu25"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-xl glass grid place-items-center hover:bg-white/10 transition"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-xl glass grid place-items-center hover:bg-white/10 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="/Sameer_Sahu_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 px-4 rounded-xl glass inline-flex items-center gap-2 hover:bg-white/10 transition text-sm"
                  >
                    Resume <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-2 block">YOUR NAME</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Cooper"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-aurora-1/60 focus:outline-none focus:ring-2 focus:ring-aurora-1/30 transition placeholder:text-muted-foreground/60"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground mb-2 block">EMAIL</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-aurora-1/60 focus:outline-none focus:ring-2 focus:ring-aurora-1/30 transition placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">MESSAGE</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project, role, or idea…"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-aurora-1/60 focus:outline-none focus:ring-2 focus:ring-aurora-1/30 transition resize-none placeholder:text-muted-foreground/60"
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-aurora-1 to-aurora-2 text-primary-foreground hover:opacity-95 transition shadow-[0_0_40px_hsl(var(--aurora-1)/0.45)]"
              >
                <Send size={16} />
                Send message
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </button>
            </form>
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
