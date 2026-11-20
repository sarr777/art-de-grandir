
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Compass, Lightbulb, Users } from "lucide-react";

function Apropos() {
    return (
        <>
            <header className="page-hero">
                <span className="section-kicker light-kicker">NOTRE IDENTITÉ</span>
                <h1>Grandir avec conscience. Construire avec intention.</h1>
                <p>
                    Découvrir la vision, les valeurs et la démarche qui donnent
                    son sens à L'ART DE GRANDIR.
                </p>
            </header>

            <section className="about-intro section-padding">
                <div className="about-lead">
                    <span className="section-kicker">POURQUOI CET ESPACE ?</span>
                    <h2>Parce que la connaissance de soi mérite une place essentielle dans notre parcours.</h2>
                </div>
                <div className="about-text">
                    <p>
                        L'ART DE GRANDIR est né d'une conviction simple : chaque personne
                        peut apprendre à mieux se comprendre et à développer les ressources
                        nécessaires pour avancer. Dans une société où l'on parle beaucoup
                        de réussite, de performance et de résultats, il est tout aussi
                        important de s'intéresser à la personne qui construit ces résultats.
                    </p>
                    <p>
                        Nos décisions sont influencées par nos croyances, nos expériences,
                        nos émotions et nos habitudes. Lorsque nous prenons le temps
                        de les examiner, nous pouvons progressivement mieux comprendre
                        nos comportements et choisir une direction plus cohérente avec
                        nos aspirations.
                    </p>
                    <p>
                        Notre espace propose des réflexions et des contenus pédagogiques
                        autour de l'estime de soi, de la confiance, de la motivation
                        et du développement personnel. Notre ambition est de rendre
                        ces sujets accessibles, utiles et suffisamment profonds pour
                        encourager une véritable réflexion.
                    </p>
                </div>
            </section>

            <section className="values-section section-padding">
                <div className="section-heading">
                    <div>
                        <span className="section-kicker">CE QUI NOUS GUIDE</span>
                        <h2>Quatre principes au cœur de notre démarche</h2>
                    </div>
                </div>

                <div className="values-grid">
                    <article className="value-card">
                        <BookOpen size={28} />
                        <h3>La connaissance</h3>
                        <p>Apprendre continuellement, développer son esprit critique et chercher à comprendre avant de juger.</p>
                    </article>
                    <article className="value-card">
                        <Compass size={28} />
                        <h3>La responsabilité</h3>
                        <p>Reconnaître sa capacité à faire des choix et à agir sur les dimensions de sa vie qui peuvent évoluer.</p>
                    </article>
                    <article className="value-card">
                        <Lightbulb size={28} />
                        <h3>La conscience</h3>
                        <p>Examiner ses habitudes, ses réactions et ses priorités pour vivre avec davantage de lucidité.</p>
                    </article>
                    <article className="value-card">
                        <Users size={28} />
                        <h3>Le respect</h3>
                        <p>Valoriser la dignité de chacun, accueillir les différences et encourager des relations constructives.</p>
                    </article>
                </div>
            </section>

            <section className="about-quote">
                <span className="section-kicker light-kicker">NOTRE CONVICTION</span>
                <h2>Une personne qui apprend à mieux se connaître se donne davantage de possibilités pour choisir sa direction.</h2>
                <p>La croissance est un chemin, pas une compétition.</p>
            </section>

            <section className="about-bottom section-padding">
                <h2>Et si ton prochain pas commençait par une nouvelle réflexion ?</h2>
                <p>Explore nos dossiers et choisis le thème qui correspond le mieux à tes préoccupations du moment.</p>
                <Link to="/blog" className="btn-primary">Découvrir nos articles <ArrowRight size={18} /></Link>
            </section>
        </>
    );
}

export default Apropos;
