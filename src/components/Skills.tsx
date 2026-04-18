import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion", "Radix UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "REST APIs"],
  },
  {
    title: "AI / ML",
    items: ["Python", "scikit-learn", "FastAPI", "TensorFlow", "Data Viz"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Render", "Neon DB"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-sm font-mono text-aurora-3 mb-3">/ 02 — skills</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            The toolkit behind <span className="text-gradient">the work</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="font-mono text-xs text-muted-foreground mb-3">0{i + 1}</div>
              <h3 className="font-display text-lg font-semibold mb-5">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-foreground/80 hover:bg-white/10 hover:text-foreground transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
