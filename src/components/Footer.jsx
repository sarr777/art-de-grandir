
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-main">

                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            L'ART DE <span>GRANDIR.</span>
                        </Link>

                        <p>
                            Apprendre à se connaître, croire en soi et construire
                            sa réussite. Un espace consacré à la connaissance de soi,
                            à la confiance et à l'épanouissement personnel.
                        </p>

                        <div className="footer-socials">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">f</a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">◎</a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</a>
                            <a href="mailto:contact@artdegrandir.com">@</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/a-propos">À propos</Link></li>
                            <li><Link to="/blog">Nos articles</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Nos thématiques</h3>
                        <ul>
                            <li><Link to="/estime-de-soi">Estime de soi</Link></li>
                            <li><Link to="/confiance-en-soi">Confiance en soi</Link></li>
                            <li><Link to="/motivation">Motivation</Link></li>
                            <li><Link to="/developpement-personnel">Développement personnel</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column footer-message">
                        <h3>Notre conviction</h3>
                        <p>
                            Chaque personne possède un potentiel qui mérite
                            d'être découvert, cultivé et développé.
                        </p>
                        <Link to="/blog" className="footer-cta">
                            Commencer à grandir →
                        </Link>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} L'ART DE GRANDIR. Tous droits réservés.
                    </p>

                    <p className="footer-made">
                        Construit avec passion pour inspirer et grandir.
                    </p>

                    <a href="#top" className="footer-top">↑</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
