import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-tight">
        <div className={`glass rounded-2xl px-5 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-soft" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-aurora-1 to-aurora-2 grid place-items-center font-display font-bold text-primary-foreground">
              S
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-aurora-1 to-aurora-2 blur-md opacity-50 -z-10 group-hover:opacity-80 transition" />
            </div>
            <span className="font-display font-semibold tracking-tight">Sameer<span className="text-aurora-3">.</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/Sameer_Sahu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-aurora-1 to-aurora-2 text-primary-foreground hover:opacity-90 transition shadow-[0_0_20px_hsl(var(--aurora-1)/0.4)]"
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden glass rounded-2xl mt-2 p-3 flex flex-col"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Sameer_Sahu_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 px-4 py-3 rounded-lg text-center font-medium bg-gradient-to-r from-aurora-1 to-aurora-2 text-primary-foreground"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
