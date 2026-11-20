
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Brain } from "lucide-react";

function DeveloppementPersonnel() {
    return (
        <article className="article-page">
            <header className="page-hero">
                <span className="section-kicker light-kicker">CONSTRUIRE SON AVENIR · 04</span>
                <h1>Le développement personnel : devenir acteur de sa propre évolution</h1>
                <p>
                    Mieux se connaître, développer ses compétences, comprendre ses
                    émotions et faire des choix plus cohérents avec ses valeurs.
                </p>
            </header>

            <div className="article-layout">
                <aside className="article-sidebar">
                    <Compass size={28} />
                    <span>THÈME</span>
                    <strong>Évolution personnelle</strong>
                    <p>Une démarche consciente, progressive et adaptée à sa propre réalité.</p>
                    <Link to="/motivation">Lire aussi : la motivation <ArrowRight size={15} /></Link>
                </aside>

                <div className="article-body">
                    <span className="article-category">APPRENDRE À SE CONSTRUIRE</span>
                    <h2>Évoluer, ce n'est pas rejeter la personne que l'on est. C'est prendre la responsabilité de celle que l'on souhaite devenir.</h2>
                    <p>
                        Le développement personnel est une démarche qui consiste à mieux
                        comprendre son fonctionnement et à entreprendre des changements
                        utiles dans sa vie. Il ne s'agit pas de suivre une formule
                        universelle ou de chercher à devenir parfait. Chaque personne
                        possède son histoire, ses contraintes, ses aspirations et son
                        propre rythme. L'essentiel est de développer une capacité
                        de réflexion qui permette de faire des choix plus conscients.
                    </p>

                    <h3>La connaissance de soi comme point de départ</h3>
                    <p>
                        Il est difficile de construire une direction cohérente lorsque
                        l'on ne connaît pas ses valeurs, ses motivations et ses limites.
                        Prendre le temps d'examiner ses habitudes, ses réactions
                        et ses priorités permet de mieux comprendre ce qui nous influence.
                    </p>
                    <p>
                        Certaines questions peuvent servir de point de départ :
                        quelles activités donnent du sens à mes journées ?
                        Quelles situations me font perdre ma concentration ?
                        Quelles valeurs voudrais-je voir davantage dans mes décisions ?
                        Quels comportements dois-je améliorer ? Les réponses évoluent
                        avec l'expérience, mais elles aident à mieux se situer.
                    </p>

                    <h3>Développer des compétences utiles</h3>
                    <p>
                        L'évolution personnelle ne se limite pas à la réflexion.
                        Elle passe aussi par l'apprentissage. La capacité à communiquer,
                        à résoudre des problèmes, à organiser son travail, à collaborer
                        et à utiliser de nouveaux outils peut ouvrir des possibilités
                        dans la vie professionnelle et personnelle.
                    </p>
                    <p>
                        Apprendre demande de la patience. Il faut accepter de commencer
                        avec des connaissances limitées, de pratiquer, de faire des erreurs
                        et de recommencer. La compétence se développe grâce à un effort
                        régulier et à des expériences concrètes.
                    </p>

                    <h3>Comprendre et réguler ses émotions</h3>
                    <p>
                        Les émotions fournissent des informations sur notre expérience.
                        La peur peut signaler une incertitude, la frustration peut révéler
                        un besoin contrarié et la colère peut indiquer qu'une limite
                        a été dépassée. Les comprendre ne signifie pas leur obéir
                        automatiquement. Cela permet de prendre un recul suffisant
                        pour choisir une réaction plus adaptée.
                    </p>
                    <p>
                        Avant de répondre à une situation difficile, il peut être utile
                        de nommer ce que l'on ressent, de prendre une pause et d'examiner
                        les faits. Cette démarche ne rend pas les problèmes faciles,
                        mais elle évite parfois qu'une réaction immédiate aggrave
                        une situation déjà délicate.
                    </p>

                    <h3>Construire des relations plus saines</h3>
                    <p>
                        Notre évolution dépend également de la qualité de nos relations.
                        Écouter attentivement, exprimer clairement ses besoins,
                        reconnaître ses torts et respecter les limites des autres
                        sont des compétences qui s'apprennent. Une relation équilibrée
                        ne repose pas sur l'absence de désaccord, mais sur la capacité
                        à communiquer avec considération.
                    </p>

                    <h3>Faire de ses habitudes des alliées</h3>
                    <p>
                        Les habitudes organisent une grande partie de notre quotidien.
                        Certaines soutiennent nos objectifs ; d'autres consomment
                        notre temps et notre attention sans apporter de bénéfice durable.
                        Observer sa journée permet d'identifier les comportements
                        à renforcer et ceux qu'il serait utile de modifier.
                    </p>
                    <p>
                        Il est souvent plus efficace de commencer par un changement
                        simple et mesurable. Lire quelques pages, planifier sa journée,
                        consacrer un temps régulier à l'apprentissage ou prendre
                        un moment pour faire le bilan de ses actions peut progressivement
                        transformer son organisation.
                    </p>

                    <div className="article-exercise">
                        <Brain size={25} />
                        <h3>Ton bilan personnel</h3>
                        <ul>
                            <li>Une qualité que je souhaite mieux utiliser.</li>
                            <li>Une compétence que je veux développer.</li>
                            <li>Une habitude que je souhaite corriger.</li>
                            <li>Une relation que je veux entretenir avec davantage d'attention.</li>
                            <li>Une action concrète que je peux commencer cette semaine.</li>
                        </ul>
                    </div>

                    <div className="article-conclusion">
                        <span>À RETENIR</span>
                        <p>
                            Le développement personnel n'est pas une course vers une version
                            idéale de soi-même. C'est une démarche continue pour mieux
                            comprendre sa vie, assumer ses choix et construire un avenir
                            plus cohérent avec ses aspirations.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default DeveloppementPersonnel;
