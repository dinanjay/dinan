import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Experience", path: "/experience" },
  { label: "Links", path: "/links" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-mono font-bold text-xl tracking-tight">
            MECH<span className="text-primary">_</span>FOLIO
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 font-mono text-sm font-bold transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              className="brutal-btn ml-3 flex items-center gap-2 text-sm !py-2 !px-4"
              onClick={(e) => e.preventDefault()}
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden brutal-border p-2 bg-background"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[67px] bg-background z-40 border-t-[3px] border-foreground">
          <div className="flex flex-col items-center justify-center gap-6 pt-16">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-2xl font-bold transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              className="brutal-btn flex items-center gap-2 text-lg mt-4"
              onClick={(e) => e.preventDefault()}
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
