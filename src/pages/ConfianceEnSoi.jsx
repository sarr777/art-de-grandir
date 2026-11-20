
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

function ConfianceEnSoi() {
    return (
        <article className="article-page">
            <header className="page-hero">
                <span className="section-kicker light-kicker">FORCE INTÉRIEURE · 02</span>
                <h1>La confiance en soi : oser avancer malgré l'incertitude</h1>
                <p>
                    La confiance ne consiste pas à être certain de réussir.
                    Elle consiste à croire que l'on peut apprendre, s'adapter et
                    faire face à ce qui se présente.
                </p>
            </header>

            <div className="article-layout">
                <aside className="article-sidebar">
                    <ShieldCheck size={28} />
                    <span>THÈME</span>
                    <strong>Confiance en soi</strong>
                    <p>Oser prendre sa place, exprimer ses idées et passer à l'action.</p>
                    <Link to="/estime-de-soi">Lire aussi : l'estime de soi <ArrowRight size={15} /></Link>
                </aside>

                <div className="article-body">
                    <span className="article-category">COMPRENDRE ET DÉVELOPPER</span>
                    <h2>Tu n'as pas besoin d'être totalement prêt pour faire ton premier pas.</h2>
                    <p>
                        La confiance en soi est souvent présentée comme une assurance
                        permanente. On imagine une personne qui n'hésite jamais,
                        qui prend la parole sans difficulté et qui affronte toutes
                        les situations sans ressentir de peur. Cette représentation
                        est trompeuse. Une personne confiante peut douter, se tromper
                        et ressentir de l'appréhension. La différence réside souvent
                        dans sa capacité à ne pas laisser ces émotions décider
                        systématiquement à sa place.
                    </p>

                    <h3>La confiance se développe par l'expérience</h3>
                    <p>
                        Il est difficile de croire en sa capacité à accomplir quelque
                        chose que l'on n'a jamais essayé. C'est pourquoi l'action joue
                        un rôle essentiel. Prendre la parole dans une petite réunion,
                        présenter une idée, apprendre un nouvel outil ou demander
                        une information sont autant d'occasions de découvrir
                        progressivement ses ressources.
                    </p>
                    <p>
                        Chaque expérience fournit des informations. Certaines confirment
                        nos compétences, d'autres révèlent des points à travailler.
                        Dans les deux cas, elles nous permettent de progresser.
                        Attendre de ne plus avoir peur avant d'agir peut devenir
                        une manière de repousser indéfiniment les occasions d'apprendre.
                    </p>

                    <h3>Accepter de ne pas tout maîtriser</h3>
                    <p>
                        La confiance ne signifie pas posséder toutes les réponses.
                        Elle suppose aussi de pouvoir reconnaître ce que l'on ignore.
                        Dire « je ne sais pas encore » est parfois plus courageux
                        que de prétendre maîtriser un sujet. Une personne qui accepte
                        d'apprendre se donne la possibilité de développer des compétences
                        réelles plutôt que de protéger une image artificielle.
                    </p>

                    <h3>Se préparer plutôt que chercher la perfection</h3>
                    <p>
                        La préparation nourrit une confiance solide. Avant une
                        présentation, il est utile de structurer ses idées, de répéter
                        et d'anticiper les questions. Avant un entretien, on peut
                        étudier l'organisation, clarifier son parcours et préparer
                        des exemples concrets. La préparation ne garantit pas
                        l'absence d'imprévu, mais elle permet de s'appuyer sur
                        un travail réel.
                    </p>

                    <h3>Ne pas laisser le regard des autres diriger toute sa vie</h3>
                    <p>
                        La peur du jugement peut empêcher d'exprimer une opinion,
                        de proposer un projet ou de saisir une opportunité. Pourtant,
                        il est impossible de contrôler toutes les interprétations
                        des autres. On peut écouter les remarques utiles, corriger
                        ses erreurs et rester ouvert à la critique sans faire
                        de chaque opinion extérieure une autorité absolue.
                    </p>

                    <h3>Construire une confiance durable</h3>
                    <p>
                        Pour renforcer sa confiance, il est utile de se fixer des
                        objectifs progressifs. Une personne qui souhaite mieux
                        s'exprimer peut commencer par poser une question, puis
                        intervenir dans un petit groupe et enfin présenter un sujet
                        devant un public plus large. La progression devient plus
                        concrète lorsqu'elle est découpée en étapes accessibles.
                    </p>
                    <p>
                        Il faut également apprendre à reconnaître ses avancées.
                        Nous avons parfois tendance à oublier les progrès réalisés
                        parce que notre attention se porte uniquement sur ce qui
                        reste à accomplir. Prendre conscience de ses efforts permet
                        de construire une image plus équilibrée de ses capacités.
                    </p>

                    <div className="article-exercise">
                        <h3>Un défi pratique sur sept jours</h3>
                        <ul>
                            <li>Jour 1 : exprime clairement une opinion personnelle.</li>
                            <li>Jour 2 : pose une question que tu hésitais à poser.</li>
                            <li>Jour 3 : commence une tâche que tu repousses.</li>
                            <li>Jour 4 : demande un retour constructif sur ton travail.</li>
                            <li>Jour 5 : apprends quelque chose que tu ne maîtrises pas.</li>
                            <li>Jour 6 : présente une idée à une autre personne.</li>
                            <li>Jour 7 : fais le bilan de ce que tu as osé entreprendre.</li>
                        </ul>
                    </div>

                    <div className="article-conclusion">
                        <span>À RETENIR</span>
                        <p>
                            La confiance grandit lorsque tu accumules des expériences,
                            que tu apprends de tes erreurs et que tu découvres que
                            l'incertitude n'empêche pas d'avancer.
                        </p>
                    </div>

                    <Link to="/motivation" className="next-article">
                        Découvrir la force de la motivation <ArrowRight />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ConfianceEnSoi;
