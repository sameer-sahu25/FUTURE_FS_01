import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const Aurora = () => {
    return (_jsxs("div", { className: "aurora-bg", children: [_jsx(motion.div, { className: "aurora-blob", style: {
                    width: 600,
                    height: 600,
                    top: "-10%",
                    left: "-10%",
                    background: "hsl(var(--aurora-1))",
                }, animate: { x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }, transition: { duration: 18, repeat: Infinity, ease: "easeInOut" } }), _jsx(motion.div, { className: "aurora-blob", style: {
                    width: 500,
                    height: 500,
                    top: "20%",
                    right: "-10%",
                    background: "hsl(var(--aurora-2))",
                }, animate: { x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.95, 1.1, 1] }, transition: { duration: 22, repeat: Infinity, ease: "easeInOut" } }), _jsx(motion.div, { className: "aurora-blob", style: {
                    width: 450,
                    height: 450,
                    bottom: "-10%",
                    left: "30%",
                    background: "hsl(var(--aurora-3))",
                    opacity: 0.4,
                }, animate: { x: [0, 40, -40, 0], y: [0, -30, 30, 0], scale: [1, 1.05, 0.95, 1] }, transition: { duration: 25, repeat: Infinity, ease: "easeInOut" } })] }));
};
export default Aurora;
