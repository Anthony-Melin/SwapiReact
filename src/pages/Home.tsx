import { Link } from 'react-router'
import crawl from '@assets/crawl.json'

function Home() {
    return (
        <main id="home-page" data-testid="home-page">
            <h1>Swapi React</h1>
            <div id="crawl-container">
                <div id="crawl-content">
                    {crawl.lines.map((line, index) => <p key={`crawl-${index}`} data-testid={`crawl-${index}`}>{line}</p>)}
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
