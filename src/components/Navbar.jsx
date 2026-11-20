
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, BookOpen, ArrowRight } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const links = [
        { label: "Accueil", path: "/" },
        { label: "Estime de soi", path: "/estime-de-soi" },
        { label: "Confiance", path: "/confiance-en-soi" },
        { label: "Motivation", path: "/motivation" },
        { label: "Développement", path: "/developpement-personnel" },
        { label: "Articles", path: "/blog" },
        { label: "À propos", path: "/apropos" },
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="brand" onClick={closeMenu}>
                    <span className="brand-symbol">
                        <BookOpen size={25} />
                    </span>

                    <span className="brand-text">
                        L'ART DE GRANDIR
                        <small>ÉVOLUER · APPRENDRE · RÉUSSIR</small>
                    </span>
                </Link>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Ouvrir le menu"
                >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            end={link.path === "/"}
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <Link to="/contact" className="nav-cta" onClick={closeMenu}>
                        Nous contacter
                        <ArrowRight size={16} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
