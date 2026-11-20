
import { Link } from "react-router-dom";
import { ArrowRight, Heart, BookOpen } from "lucide-react";

function EstimeDeSoi() {
    return (
        <article className="article-page">
            <header className="page-hero">
                <span className="section-kicker light-kicker">CONNAISSANCE DE SOI · 01</span>
                <h1>L'estime de soi : apprendre à reconnaître sa propre valeur</h1>
                <p>
                    Se respecter, accepter son histoire et comprendre que notre valeur
                    ne dépend pas uniquement de nos réussites, de nos erreurs ou du
                    regard que les autres portent sur nous.
                </p>
            </header>

            <div className="article-layout">
                <aside className="article-sidebar">
                    <Heart size={28} />
                    <span>THÈME</span>
                    <strong>Estime de soi</strong>
                    <p>Une relation intérieure qui influence nos choix, nos limites et notre manière de vivre.</p>
                    <Link to="/confiance-en-soi">Lire aussi : la confiance <ArrowRight size={15} /></Link>
                </aside>

                <div className="article-body">
                    <span className="article-category">COMPRENDRE ET CONSTRUIRE</span>
                    <h2>La manière dont tu te considères influence la manière dont tu avances.</h2>
                    <p>
                        L'estime de soi désigne la valeur que nous nous accordons.
                        Elle correspond à cette appréciation intérieure qui nous permet
                        de nous considérer comme des personnes dignes de respect,
                        indépendamment de notre situation du moment. Elle ne signifie
                        pas se croire supérieur aux autres, ignorer ses défauts ou
                        considérer que l'on a toujours raison. Elle consiste plutôt
                        à reconnaître que nous avons une valeur humaine qui ne disparaît
                        pas lorsque nous échouons ou lorsque nous ne répondons pas
                        à toutes nos propres attentes.
                    </p>

                    <h3>1. Ne pas confondre sa valeur et ses résultats</h3>
                    <p>
                        Beaucoup de personnes finissent par mesurer leur valeur à travers
                        leurs performances. Elles se sentent importantes lorsqu'elles
                        réussissent, mais se jugent sévèrement dès qu'elles commettent
                        une erreur. Un examen raté devient alors une preuve supposée
                        d'incapacité ; une occasion manquée devient une raison de se
                        dévaloriser ; une critique se transforme en jugement définitif
                        sur leur personnalité.
                    </p>
                    <p>
                        Pourtant, un résultat décrit une situation précise, pas la totalité
                        d'une personne. Échouer dans une entreprise ne signifie pas être
                        incapable d'entreprendre. Manquer une opportunité ne signifie pas
                        ne mériter aucune autre occasion. Il est important d'apprendre
                        de ses résultats sans les laisser définir toute son identité.
                    </p>

                    <h3>2. Apprendre à se parler avec respect</h3>
                    <p>
                        Notre dialogue intérieur accompagne chacune de nos expériences.
                        Lorsque nous répétons constamment que nous sommes incapables,
                        en retard ou moins intéressants que les autres, nous finissons
                        par considérer ces paroles comme des vérités. Il est possible
                        d'être exigeant envers soi-même sans être constamment humiliant.
                    </p>
                    <p>
                        Remplacer « je suis nul » par « je n'ai pas encore maîtrisé cette
                        compétence » change la nature du problème. La première formule
                        condamne la personne ; la seconde identifie un apprentissage
                        possible. Cette nuance ne supprime pas les difficultés, mais
                        elle permet de les aborder avec davantage de lucidité.
                    </p>

                    <h3>3. Cesser de faire de la comparaison une mesure de sa valeur</h3>
                    <p>
                        Nous observons souvent chez les autres des résultats visibles :
                        leurs réussites, leurs voyages, leurs diplômes, leurs projets
                        et leurs moments heureux. En revanche, nous connaissons rarement
                        les efforts, les renoncements, les difficultés et les circonstances
                        qui se trouvent derrière ces images.
                    </p>
                    <p>
                        Se comparer continuellement à des parcours différents peut faire
                        oublier sa propre progression. Une comparaison plus constructive
                        consiste à examiner ce que l'on a appris, les obstacles que l'on
                        a dépassés et les responsabilités que l'on est désormais capable
                        d'assumer. Le progrès personnel n'a pas besoin de ressembler
                        à celui d'une autre personne pour avoir de la valeur.
                    </p>

                    <h3>4. Poser des limites sans culpabiliser</h3>
                    <p>
                        Se respecter implique aussi de reconnaître ses besoins et ses
                        limites. Accepter toutes les demandes par peur de décevoir,
                        tolérer des comportements qui nous blessent ou renoncer
                        systématiquement à nos priorités pour obtenir l'approbation
                        d'autrui peut progressivement affaiblir notre considération
                        personnelle.
                    </p>
                    <p>
                        Dire non avec calme n'est pas nécessairement un manque de
                        générosité. C'est parfois une manière de préserver son équilibre,
                        son temps et ses engagements essentiels. Le respect des autres
                        ne doit pas exiger l'abandon permanent du respect de soi.
                    </p>

                    <div className="article-exercise">
                        <BookOpen size={25} />
                        <h3>Un exercice pour commencer</h3>
                        <p>
                            Prends une feuille et réponds honnêtement à ces trois questions :
                        </p>
                        <ul>
                            <li>Quelles sont les qualités que je reconnais réellement en moi ?</li>
                            <li>Quelle erreur passée dois-je apprendre à ne plus utiliser contre moi ?</li>
                            <li>Quelle limite dois-je poser pour mieux me respecter ?</li>
                        </ul>
                        <p>
                            Relis tes réponses après quelques jours. L'objectif n'est pas
                            de te convaincre que tout est parfait, mais de développer
                            un regard plus juste sur toi-même.
                        </p>
                    </div>

                    <h3>La valeur personnelle se construit aussi dans les actes</h3>
                    <p>
                        L'estime de soi ne repose pas uniquement sur des pensées positives.
                        Elle se renforce lorsque nos actes deviennent cohérents avec
                        le respect que nous souhaitons nous accorder : tenir un engagement
                        envers soi-même, prendre soin de son équilibre, reconnaître
                        ses erreurs, demander de l'aide lorsque cela est nécessaire
                        et continuer à apprendre.
                    </p>
                    <p>
                        Il ne s'agit pas de devenir une personne parfaite. Il s'agit
                        de développer une relation plus honnête, plus patiente et plus
                        responsable avec soi-même. On peut reconnaître ses faiblesses
                        sans se réduire à elles et poursuivre ses ambitions sans
                        conditionner toute sa dignité à leur réalisation.
                    </p>

                    <div className="article-conclusion">
                        <span>À RETENIR</span>
                        <p>
                            Reconnaître sa valeur ne signifie pas penser que l'on n'a
                            rien à améliorer. Cela signifie comprendre que l'on mérite
                            le respect pendant que l'on apprend, que l'on change et que
                            l'on construit son avenir.
                        </p>
                    </div>

                    <Link to="/confiance-en-soi" className="next-article">
                        Continuer avec la confiance en soi <ArrowRight />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default EstimeDeSoi;
