
import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowRight, BookOpen } from "lucide-react";

function Contact() {
    return (
        <>
            <header className="page-hero">
                <span className="section-kicker light-kicker">ÉCHANGEONS ENSEMBLE</span>
                <h1>Une réflexion, une question ou une suggestion ?</h1>
                <p>
                    Chaque échange peut être l'occasion de partager une idée,
                    de proposer une amélioration ou d'ouvrir une nouvelle discussion.
                </p>
            </header>

            <section className="contact-section section-padding">
                <div className="contact-intro">
                    <span className="section-kicker">NOUS CONTACTER</span>
                    <h2>Nous sommes à l'écoute de tes idées.</h2>
                    <p>
                        L'ART DE GRANDIR est un espace de partage et de réflexion.
                        Si tu souhaites nous faire part d'une remarque, suggérer un thème
                        ou poser une question au sujet de notre démarche, tu peux
                        nous écrire par courrier électronique.
                    </p>

                    <div className="contact-info-card">
                        <span className="contact-info-icon"><Mail size={23} /></span>
                        <div>
                            <strong>Adresse électronique</strong>
                            <a href="mailto:contact@artdegrandir.com">contact@artdegrandir.com</a>
                        </div>
                    </div>

                    <div className="contact-info-card">
                        <span className="contact-info-icon"><MessageCircle size={23} /></span>
                        <div>
                            <strong>Un sujet à proposer ?</strong>
                            <p>Partage une idée de thème pour nos prochains dossiers.</p>
                        </div>
                    </div>
                </div>

                <div className="contact-panel">
                    <BookOpen size={32} />
                    <span className="section-kicker">ÉCRIS-NOUS</span>
                    <h3>Chaque message mérite une attention particulière.</h3>
                    <p>
                        Pour le moment, le site ne possède pas encore de système
                        d'envoi de formulaire connecté à un serveur. Tu peux nous
                        contacter directement par e-mail.
                    </p>
                    <a className="btn-primary" href="mailto:contact@artdegrandir.com?subject=Message%20-%20L%27ART%20DE%20GRANDIR">
                        Envoyer un e-mail <ArrowRight size={18} />
                    </a>
                    <small>Pense à remplacer cette adresse par ton adresse officielle avant la mise en ligne.</small>
                </div>
            </section>

            <section className="contact-bottom">
                <h2>Merci de contribuer à faire grandir cet espace.</h2>
                <Link to="/blog">Continuer la lecture <ArrowRight size={16} /></Link>
            </section>
        </>
    );
}

export default Contact;
