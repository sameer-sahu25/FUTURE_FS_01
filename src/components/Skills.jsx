import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "skills", className: "relative py-28", children: _jsxs("div", { className: "container-tight", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 }, className: "max-w-2xl mb-16", children: [_jsx("div", { className: "text-sm font-mono text-aurora-3 mb-3", children: "/ 02 \u2014 skills" }), _jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight", children: ["The toolkit behind ", _jsx("span", { className: "text-gradient", children: "the work" }), "."] })] }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: groups.map((g, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.6, delay: i * 0.08 }, className: "glass rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-500", children: [_jsxs("div", { className: "font-mono text-xs text-muted-foreground mb-3", children: ["0", i + 1] }), _jsx("h3", { className: "font-display text-lg font-semibold mb-5", children: g.title }), _jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((it) => (_jsx("span", { className: "px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-foreground/80 hover:bg-white/10 hover:text-foreground transition", children: it }, it))) })] }, g.title))) })] }) }));
};
export default Skills;
