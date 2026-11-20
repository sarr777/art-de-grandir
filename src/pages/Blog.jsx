
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Target, Brain } from "lucide-react";

const articles = [
    {
        category: "ESTIME DE SOI",
        title: "Apprendre à reconnaître sa propre valeur",
        description: "Comprendre pourquoi notre valeur ne doit pas dépendre uniquement de nos résultats ou de l'approbation des autres.",
        icon: Heart,
        path: "/estime-de-soi",
        number: "01",
    },
    {
        category: "CONFIANCE EN SOI",
        title: "Oser avancer malgré l'incertitude",
        description: "Découvrir comment l'expérience, la préparation et les petites actions permettent de construire une confiance durable.",
        icon: Brain,
        path: "/confiance-en-soi",
        number: "02",
    },
    {
        category: "MOTIVATION",
        title: "Transformer ses intentions en actions",
        description: "Donner une direction à ses ambitions et apprendre à maintenir ses efforts lorsque l'enthousiasme diminue.",
        icon: Target,
        path: "/motivation",
        number: "03",
    },
    {
        category: "DÉVELOPPEMENT PERSONNEL",
        title: "Devenir acteur de sa propre évolution",
        description: "Faire de la connaissance de soi, de l'apprentissage et des habitudes des leviers de transformation.",
        icon: BookOpen,
        path: "/developpement-personnel",
        number: "04",
    },
];

function Blog() {
    return (
        <>
            <header className="page-hero">
                <span className="section-kicker light-kicker">LE JOURNAL DE L'ÉVOLUTION</span>
                <h1>Des idées à comprendre. Des réflexions à approfondir.</h1>
                <p>
                    Des contenus consacrés à la connaissance de soi, à la confiance,
                    à la motivation et aux choix qui façonnent notre quotidien.
                </p>
            </header>

            <section className="blog-section section-padding">
                <div className="section-heading">
                    <div>
                        <span className="section-kicker">NOS DOSSIERS</span>
                        <h2>Explorer les grandes dimensions de la croissance personnelle</h2>
                    </div>
                    <p>
                        Prends le temps de lire, de questionner tes habitudes et de retenir
                        les idées qui peuvent nourrir ta réflexion.
                    </p>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => {
                        const Icon = article.icon;
                        return (
                            <article className="blog-card" key={article.number}>
                                <div className="blog-card-top">
                                    <span>{article.number}</span>
                                    <Icon size={26} />
                                </div>
                                <span className="article-category">{article.category}</span>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <Link to={article.path} className="card-link">
                                    Lire le dossier <ArrowRight size={16} />
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="blog-note">
                <span className="section-kicker light-kicker">LIRE POUR COMPRENDRE, AGIR POUR ÉVOLUER</span>
                <h2>Une idée ne transforme pas une vie à elle seule. C'est la manière dont on la comprend et dont on l'applique qui lui donne sa portée.</h2>
            </section>
        </>
    );
}

export default Blog;
