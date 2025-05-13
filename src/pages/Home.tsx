import { Link } from 'react-router'

function Home() {
    return (
        <main id="home-page" data-testid="home-page">
            <h1>Swapi React</h1>
            <div id="crawl-container">
                <div id="crawl-content">
                    <p>
                        L’année 2025 sera marqué par l’avènement d’une nouvelle
                        ère pour le développement front-end.
                    </p>
                    <p>
                        React 19 et React Router V7 ont émergé, porteurs de
                        promesses révolutionnaires : un rendu plus performant
                        grâce au streaming SSR, une gestion fluide des états, et
                        une navigation optimisée digne des vaisseaux les plus
                        rapides de la galaxie.
                    </p>
                    <p>
                        Face à ces avancées, une mission s’impose : bâtir une
                        application moderne, réactive et évolutive, exploitant
                        toute la puissance de ces nouvelles technologies.
                    </p>
                    <p>
                        Grâce à React 19, le rendu devient progressif,
                        interactif dès la première milliseconde.
                    </p>
                    <p>
                        Quant à React Router V7, il redéfinit le voyage entre
                        les pages, rendant la navigation plus intuitive et
                        efficace que jamais.
                    </p>
                    <p>
                        Pour explorer ces nouvelles technologies, un projet
                        ambitieux voit le jour : SwapiReact, une application
                        interactive dédiée à l’univers Star Wars.
                    </p>
                    <p>
                        Alimentée par l’API SWAPI, elle permet d’accéder aux
                        données des personnages, planètes, vaisseaux et films de
                        la saga culte.
                    </p>
                    <p>
                        <Link data-testid="to-explorer" to="/people">
                            Commencer l'exploration
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Home
