import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
const Index = () => {
    return (_jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [_jsx(Aurora, {}), _jsx(Navbar, {}), _jsxs("main", { className: "relative z-10", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Timeline, {}), _jsx(Contact, {})] })] }));
};
export default Index;
