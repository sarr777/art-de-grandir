
import { Link } from "react-router-dom";
import { ArrowRight, Target, CalendarCheck } from "lucide-react";

function Motivation() {
    return (
        <article className="article-page">
            <header className="page-hero">
                <span className="section-kicker light-kicker">ACTION ET PERSÉVÉRANCE · 03</span>
                <h1>La motivation : transformer ses intentions en actions</h1>
                <p>
                    Avoir des ambitions est une première étape. Leur donner une direction,
                    organiser ses efforts et poursuivre son engagement en est une autre.
                </p>
            </header>

            <div className="article-layout">
                <aside className="article-sidebar">
                    <Target size={28} />
                    <span>THÈME</span>
                    <strong>Motivation</strong>
                    <p>Donner du sens à ses objectifs et apprendre à avancer avec régularité.</p>
                    <Link to="/developpement-personnel">Voir le développement personnel <ArrowRight size={15} /></Link>
                </aside>

                <div className="article-body">
                    <span className="article-category">PASSER DE L'ENVIE À L'ACTION</span>
                    <h2>La motivation peut ouvrir la porte, mais la discipline aide à poursuivre le chemin.</h2>
                    <p>
                        Nous connaissons tous ces moments où une nouvelle idée nous
                        enthousiasme. Nous décidons de lire davantage, de reprendre
                        nos études avec sérieux, de créer une activité ou de développer
                        une compétence. Au début, l'énergie semble abondante.
                        Puis les obligations reviennent, les résultats tardent
                        et l'enthousiasme diminue. C'est souvent à ce moment que
                        la différence se fait entre une intention et un véritable engagement.
                    </p>

                    <h3>Donner un sens précis à ses objectifs</h3>
                    <p>
                        Un objectif vague est difficile à transformer en action.
                        Dire « je veux réussir » exprime un souhait, mais ne précise
                        ni la direction ni les étapes. Il est plus utile de définir
                        ce que signifie cette réussite : obtenir une qualification,
                        maîtriser une technologie, construire un projet ou améliorer
                        une compétence précise.
                    </p>
                    <p>
                        Un objectif clair permet de choisir des actions concrètes.
                        Il devient possible de déterminer ce qui doit être appris,
                        le temps à consacrer au travail et les signes qui permettront
                        d'évaluer les progrès.
                    </p>

                    <h3>Comprendre le rôle de la discipline</h3>
                    <p>
                        La discipline est la capacité à maintenir certains engagements
                        même lorsque l'envie varie. Elle ne signifie pas vivre dans
                        la rigidité ou s'interdire tout repos. Elle consiste à organiser
                        son quotidien pour que les actions importantes ne dépendent
                        pas uniquement de l'humeur du moment.
                    </p>
                    <p>
                        Une heure de travail régulière peut produire davantage
                        de résultats qu'une journée exceptionnelle suivie de longues
                        périodes d'abandon. La répétition permet de consolider
                        les connaissances, de développer des automatismes et de
                        rendre les progrès plus visibles.
                    </p>

                    <h3>Découper les grandes ambitions</h3>
                    <p>
                        Un projet important peut sembler décourageant lorsqu'on
                        le considère dans son ensemble. Le diviser en étapes réduit
                        cette impression. Pour apprendre une nouvelle compétence,
                        on peut commencer par les bases, réaliser un petit exercice,
                        construire un projet simple, puis aborder des problèmes
                        plus complexes.
                    </p>
                    <p>
                        Chaque étape terminée constitue un repère. Elle permet
                        de constater que l'objectif n'est pas seulement une idée
                        lointaine, mais un résultat que l'on construit progressivement.
                    </p>

                    <h3>Apprendre à traverser les périodes de baisse</h3>
                    <p>
                        La fatigue, les imprévus et les déceptions font partie
                        de tout parcours. Il serait irréaliste de penser que l'on
                        peut rester enthousiaste chaque jour. Lorsque l'énergie
                        diminue, il peut être nécessaire d'adapter son rythme,
                        de revoir ses priorités ou de prendre un temps de repos.
                    </p>
                    <p>
                        Une difficulté temporaire ne doit pas automatiquement
                        devenir un abandon définitif. Il est possible de reprendre
                        après une interruption, de corriger son organisation
                        et de continuer avec une meilleure compréhension de ses besoins.
                    </p>

                    <h3>Protéger son attention</h3>
                    <p>
                        La multiplication des distractions rend parfois difficile
                        le travail en profondeur. Les notifications, les consultations
                        répétées du téléphone et le passage permanent d'une tâche
                        à une autre fragmentent l'attention. Définir des périodes
                        de concentration, éloigner les distractions et établir
                        une priorité principale pour la journée aide à préserver
                        son énergie mentale.
                    </p>

                    <div className="article-exercise">
                        <CalendarCheck size={25} />
                        <h3>Construis ton plan d'action</h3>
                        <ul>
                            <li>Choisis un objectif important et formule-le précisément.</li>
                            <li>Identifie trois étapes nécessaires pour l'atteindre.</li>
                            <li>Détermine une action réalisable à effectuer chaque jour.</li>
                            <li>Prévois un moment hebdomadaire pour évaluer tes progrès.</li>
                            <li>Adapte ton organisation sans abandonner ton objectif au premier obstacle.</li>
                        </ul>
                    </div>

                    <div className="article-conclusion">
                        <span>À RETENIR</span>
                        <p>
                            La motivation donne une impulsion. La clarté donne une direction.
                            La discipline et la régularité permettent de transformer
                            progressivement une ambition en réalité.
                        </p>
                    </div>

                    <Link to="/developpement-personnel" className="next-article">
                        Approfondir son évolution personnelle <ArrowRight />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default Motivation;
