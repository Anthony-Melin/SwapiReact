import {
    Link,
    LoaderFunctionArgs,
    useLoaderData,
    useParams,
} from 'react-router'
import getFetch from '@api/getFetch.ts'
import Explore from '@api/types/explore.ts'
import { urlParse } from '@api/utils.ts'

export const clientLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = URL.parse(request.url) as URL
    return {
        explore: await getFetch<Explore>(`${url.pathname}${url.search}`),
    }
}

const Explorer = () => {
    const { explore } = useLoaderData() as Awaited<
        ReturnType<typeof clientLoader>
    >
    const { section } = useParams()
    return (
        <main id="explorer-page" data-testid="explorer-page">
            <h1 data-testid="section-title">{section}</h1>
            <h3 data-testid="section-count">Results: {explore.count}</h3>
            <div className="page-navigation">
                {explore.previous && (
                    <Link
                        data-testid="page-prev"
                        to={urlParse(explore.previous)}
                    >
                        prev
                    </Link>
                )}
                {explore.next && (
                    <Link data-testid="page-next" to={urlParse(explore.next)}>
                        next
                    </Link>
                )}
            </div>
            <ul>
                {explore.results.map((result, index) => {
                    const name = result.name || result.title
                    return (
                        <li key={name}>
                            <Link
                                data-testid={`item-${index}`}
                                to={urlParse(result.url)}
                            >
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Explorer
