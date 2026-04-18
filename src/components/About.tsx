import { motion } from "framer-motion";
import { Code2, Palette, Layers, Rocket } from "lucide-react";

const items = [
  { icon: Code2, title: "Full-Stack Development", text: "Building production React apps backed by Node, Express, and PostgreSQL APIs." },
  { icon: Palette, title: "Responsive UI/UX", text: "Crafting accessible, polished interfaces with Tailwind, Radix, and motion design." },
  { icon: Layers, title: "Applied AI / ML", text: "Prototyping ML features with Python, scikit-learn, and FastAPI for real product use cases." },
  { icon: Rocket, title: "Ship & Iterate", text: "CI/CD, Vercel & Render deployments, agile collaboration, and rapid iteration." },
];

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-sm font-mono text-aurora-3 mb-3">/ 01 — about</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Designing & shipping <span className="text-gradient">thoughtful software</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            I'm a B.Tech student in AI & ML with hands-on experience across the full stack. I love
            the moment an idea becomes a working product — and the small details that make it feel
            effortless to use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass rounded-3xl p-7 hover:bg-white/[0.04] transition relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-aurora-1 to-aurora-2 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 rounded-2xl bg-gradient-to-br from-aurora-1/20 to-aurora-2/20 border border-white/10 items-center justify-center mb-5">
                  <it.icon className="h-5 w-5 text-aurora-3" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
