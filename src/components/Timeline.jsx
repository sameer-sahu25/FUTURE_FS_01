import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";
const events = [
    {
        icon: Sparkles,
        side: "left",
        year: "2026",
        title: "Smart Inbox Guard",
        sub: "Built & shipped",
        text: "AI-powered email security: ML classifier + React analytics dashboard, deployed end-to-end.",
    },
    {
        icon: Briefcase,
        side: "right",
        year: "2025",
        title: "Jabalpur Stays",
        sub: "Full-stack project",
        text: "Production hotel platform with secure auth, admin dashboard and PostgreSQL backend.",
    },
    {
        icon: GraduationCap,
        side: "left",
        year: "2024 — 2028",
        title: "B.Tech, Computer Science",
        sub: "Shree Ram Institute of Science & Tech, Jabalpur",
        text: "Specializing in AI & ML. Coursework in DSA, Web Dev, DBMS and Software Engineering.",
    },
    {
        icon: Sparkles,
        side: "right",
        year: "2024",
        title: "WeatherApp",
        sub: "First public project",
        text: "Glassmorphism weather dashboard built around the OpenWeather API.",
    },
    {
        icon: GraduationCap,
        side: "left",
        year: "2023",
        title: "Senior Secondary (12th)",
        sub: "Small Wonder Senior Secondary School, Jabalpur",
        text: "PCM stream — foundation in Physics, Chemistry & Mathematics.",
    },
];
const Timeline = () => {
    return (_jsx("section", { id: "timeline", className: "relative py-28", children: _jsxs("div", { className: "container-tight", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 }, className: "max-w-2xl mb-16", children: [_jsx("div", { className: "text-sm font-mono text-aurora-3 mb-3", children: "/ 04 \u2014 journey" }), _jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight", children: ["A short ", _jsx("span", { className: "text-gradient", children: "timeline" }), "."] })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-aurora-2/40 to-transparent md:-translate-x-1/2" }), _jsx("div", { className: "space-y-10", children: events.map((e, i) => {
                                const isLeft = e.side === "left";
                                return (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, delay: i * 0.05 }, className: `relative grid md:grid-cols-2 gap-6 items-center ${isLeft ? "" : "md:[direction:rtl]"}`, children: [_jsx("div", { className: `${isLeft ? "md:pr-12" : "md:pl-12 md:[direction:ltr]"} pl-12 md:pl-0`, children: _jsxs("div", { className: "glass rounded-2xl p-6", children: [_jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-aurora-3 mb-2", children: [_jsx(e.icon, { size: 14 }), " ", e.year] }), _jsx("h3", { className: "font-display text-xl font-semibold", children: e.title }), _jsx("div", { className: "text-sm text-muted-foreground mb-3", children: e.sub }), _jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: e.text })] }) }), _jsx("div", { className: "absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-10", children: _jsx("div", { className: "relative h-4 w-4 rounded-full bg-gradient-to-br from-aurora-1 to-aurora-2 ring-4 ring-background", children: _jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-aurora-1 to-aurora-2 blur-md opacity-70 animate-pulse-glow" }) }) })] }, i));
                            }) })] })] }) }));
};
export default Timeline;
