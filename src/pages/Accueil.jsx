
import { Link } from "react-router-dom";
import {
    ArrowRight, Brain, Heart, Compass, Target, BookOpen,
    Lightbulb, Quote, Sparkles
} from "lucide-react";

const themes = [
    {
        icon: Heart,
        number: "01",
        title: "L'estime de soi",
        text: "Reconnaître sa valeur, accepter son histoire et apprendre à se considérer avec respect, même lorsque tout n'est pas encore parfait.",
        link: "/estime-de-soi",
    },
    {
        icon: Brain,
        number: "02",
        title: "La confiance en soi",
        text: "Développer la conviction que l'on peut apprendre, agir et progresser, même face à l'incertitude et aux difficultés.",
        link: "/confiance-en-soi",
    },
    {
        icon: Target,
        number: "03",
        title: "La motivation",
        text: "Trouver une direction, donner du sens à ses efforts et avancer avec constance au-delà des enthousiasmes passagers.",
        link: "/motivation",
    },
    {
        icon: Compass,
        number: "04",
        title: "Le développement personnel",
        text: "Mieux comprendre ses pensées, ses habitudes, ses émotions et ses aspirations pour devenir acteur de sa propre évolution.",
        link: "/developpement-personnel",
    },
];

function Accueil() {
    return (
        <>
            <section className="hero">
                <div className="hero-pattern"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="eyebrow light-eyebrow">
                            <Sparkles size={15} /> UN ESPACE POUR ÉVOLUER
                        </span>
                        <h1>
                            Le plus beau projet de ta vie, <em>c'est toi.</em>
                        </h1>
                        <p className="hero-description">
                            Apprendre à se connaître, développer sa confiance, cultiver
                            la discipline et donner une direction à ses ambitions :
                            grandir est un chemin qui commence par une décision intérieure.
                        </p>
                        <div className="hero-actions">
                            <Link to="/developpement-personnel" className="btn-primary">
                                Commencer à évoluer <ArrowRight size={18} />
                            </Link>
                            <Link to="/apropos" className="btn-outline">
                                Découvrir notre vision
                            </Link>
                        </div>
                        <div className="hero-note">
                            <span className="hero-note-line"></span>
                            GRANDIR AVEC CONSCIENCE. AVANCER AVEC INTENTION.
                        </div>
                    </div>

                    <div className="hero-side-card">
                        <span className="hero-card-number">01 / 04</span>
                        <Quote size={30} />
                        <p>
                            Tu n'as pas besoin de devenir quelqu'un d'autre.
                            Tu as besoin de découvrir pleinement ce que tu peux devenir.
                        </p>
                        <span className="hero-card-author">L'ART DE GRANDIR</span>
                    </div>
                </div>
                <div className="hero-bottom-label">CONNAISSANCE DE SOI · ÉVOLUTION · RÉUSSITE</div>
            </section>

            <section className="intro-section section-padding">
                <div className="intro-grid">
                    <div>
                        <span className="section-kicker">NOTRE PHILOSOPHIE</span>
                        <h2 className="editorial-heading">
                            Grandir est un travail intérieur avant d'être une réussite extérieure.
                        </h2>
                    </div>
                    <div className="intro-text">
                        <p>
                            Dans un monde qui nous pousse constamment à aller plus vite,
                            à nous comparer et à mesurer notre valeur à travers les résultats,
                            il devient essentiel de prendre le temps de comprendre qui nous
                            sommes réellement. La réussite ne se construit pas uniquement
                            par les diplômes, les possessions ou la reconnaissance des autres.
                            Elle commence aussi dans notre manière de penser, de choisir,
                            de réagir et de nous relever.
                        </p>
                        <p>
                            <strong>L'ART DE GRANDIR</strong> est un espace consacré à cette
                            dimension essentielle de l'existence. Nous y explorons les
                            attitudes, les connaissances et les habitudes qui permettent
                            de mieux se comprendre, de développer son potentiel et de
                            construire une vie plus consciente.
                        </p>
                        <Link to="/apropos" className="text-link">
                            En savoir plus sur notre démarche <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="themes-section section-padding">
                <div className="section-heading">
                    <div>
                        <span className="section-kicker">LES FONDATIONS DE L'ÉVOLUTION</span>
                        <h2>Les domaines qui façonnent une personne</h2>
                    </div>
                    <p>
                        Chaque dimension de notre développement contribue à notre manière
                        de vivre, de travailler, d'entretenir nos relations et de poursuivre
                        nos objectifs.
                    </p>
                </div>

                <div className="theme-grid">
                    {themes.map((theme) => {
                        const Icon = theme.icon;
                        return (
                            <article className="theme-card" key={theme.number}>
                                <div className="theme-card-top">
                                    <span className="theme-number">{theme.number}</span>
                                    <span className="theme-icon"><Icon size={24} /></span>
                                </div>
                                <h3>{theme.title}</h3>
                                <p>{theme.text}</p>
                                <Link to={theme.link} className="card-link">
                                    Explorer ce thème <ArrowRight size={16} />
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="manifesto-section">
                <div className="manifesto-inner">
                    <span className="section-kicker light-kicker">UNE AUTRE MANIÈRE DE VOIR LA RÉUSSITE</span>
                    <h2>
                        Ne cherche pas seulement à aller loin. Apprends aussi à devenir
                        une personne capable d'apprécier le chemin.
                    </h2>
                    <p>
                        La croissance personnelle ne se mesure pas uniquement à la vitesse
                        de nos progrès. Elle se révèle dans la qualité de nos décisions,
                        la maîtrise de nos réactions, la sincérité de nos relations et
                        notre capacité à rester fidèles à nos valeurs.
                    </p>
                    <Link to="/motivation" className="manifesto-link">
                        Approfondir cette réflexion <ArrowRight size={17} />
                    </Link>
                </div>
            </section>

            <section className="reflection-section section-padding">
                <div className="reflection-heading">
                    <span className="section-kicker">UNE QUESTION ESSENTIELLE</span>
                    <h2>À quand remonte la dernière fois où tu as pris le temps de réfléchir à la personne que tu deviens ?</h2>
                    <p>
                        Nos journées sont souvent remplies d'obligations, de sollicitations
                        et d'objectifs. Pourtant, prendre quelques instants pour examiner
                        ses choix et ses habitudes peut transformer la manière dont on
                        envisage l'avenir.
                    </p>
                </div>
                <div className="reflection-points">
                    <div><span>01</span><p>Connais tes valeurs et ce qui compte réellement pour toi.</p></div>
                    <div><span>02</span><p>Identifie les habitudes qui te rapprochent de tes objectifs.</p></div>
                    <div><span>03</span><p>Accepte d'apprendre, de corriger et de recommencer.</p></div>
                </div>
            </section>

            <section className="articles-preview section-padding">
                <div className="section-heading">
                    <div>
                        <span className="section-kicker">POUR ALLER PLUS LOIN</span>
                        <h2>Des réflexions pour nourrir ton évolution</h2>
                    </div>
                    <Link to="/blog" className="text-link">Tous les articles <ArrowRight size={17} /></Link>
                </div>
                <div className="article-preview-grid">
                    <article className="preview-card preview-blue">
                        <span>ESTIME DE SOI</span>
                        <h3>Apprendre à reconnaître sa propre valeur</h3>
                        <p>Comprendre pourquoi le regard que l'on porte sur soi influence profondément nos choix et nos relations.</p>
                        <Link to="/estime-de-soi">Lire la réflexion <ArrowRight size={16} /></Link>
                    </article>
                    <article className="preview-card preview-light">
                        <span>CONFIANCE EN SOI</span>
                        <h3>Oser agir sans attendre de ne plus avoir peur</h3>
                        <p>La confiance ne précède pas toujours l'action. Elle se construit souvent à travers elle.</p>
                        <Link to="/confiance-en-soi">Lire la réflexion <ArrowRight size={16} /></Link>
                    </article>
                    <article className="preview-card preview-dark">
                        <span>DISCIPLINE</span>
                        <h3>La constance, cette force silencieuse</h3>
                        <p>Découvrir pourquoi les petits efforts répétés peuvent transformer durablement une existence.</p>
                        <Link to="/motivation">Lire la réflexion <ArrowRight size={16} /></Link>
                    </article>
                </div>
            </section>

            <section className="final-cta">
                <div>
                    <span className="section-kicker light-kicker">TON CHEMIN COMMENCE ICI</span>
                    <h2>Chaque jour offre une nouvelle occasion de devenir plus conscient, plus solide et plus libre.</h2>
                    <p>Ne remets pas toute ton évolution à demain. Commence par une réflexion, une décision et une action.</p>
                </div>
                <Link to="/blog" className="btn-primary">
                    Explorer les articles <ArrowRight size={18} />
                </Link>
            </section>
        </>
    );
}

export default Accueil;
