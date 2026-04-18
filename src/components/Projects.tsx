import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    n: "01",
    name: "Smart Inbox Guard",
    year: "2026",
    tag: "AI · Security",
    desc: "AI-powered email security system. Python ML models classify spam & phishing in real time, served via FastAPI to a Node backend with a React analytics dashboard.",
    stack: ["React", "Node.js", "Python", "scikit-learn", "FastAPI"],
    accent: "from-aurora-1 to-aurora-2",
  },
  {
    n: "02",
    name: "Jabalpur Stays",
    year: "2025",
    tag: "Full-Stack",
    desc: "Full-stack hotel booking platform with real-time reservations, role-based admin dashboard, secure auth, and an optimized PostgreSQL backend.",
    stack: ["React", "Express", "PostgreSQL", "Sequelize", "JWT"],
    accent: "from-aurora-2 to-aurora-4",
  },
  {
    n: "03",
    name: "WeatherApp",
    year: "2024",
    tag: "UI · API",
    desc: "Glassmorphism weather dashboard with dynamic backgrounds tied to live conditions, location search, caching and graceful error states.",
    stack: ["React", "OpenWeather API", "Tailwind"],
    accent: "from-aurora-3 to-aurora-1",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-sm font-mono text-aurora-3 mb-3">/ 03 — selected work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Things I've <span className="text-gradient">built</span>.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-8 md:p-10 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br ${p.accent} opacity-10 group-hover:opacity-25 blur-3xl transition-opacity duration-700`} />

              <div className="relative grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="font-mono text-sm text-muted-foreground">{p.n}</div>
                  <div className="font-mono text-xs text-aurora-3 mt-1">{p.year}</div>
                </div>

                <div className="md:col-span-7">
                  <div className="text-xs font-mono text-muted-foreground mb-3">{p.tag}</div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-gradient transition">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:flex-col gap-3 md:items-end">
                  <a
                    href="https://github.com/sameer-sahu25"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href="https://github.com/sameer-sahu25"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm bg-gradient-to-r from-aurora-1 to-aurora-2 text-primary-foreground hover:opacity-90 transition"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
