import {
    ClientLoaderFunctionArgs,
    Link,
    useLoaderData,
    useParams,
} from 'react-router'
import getFetch from '@api/getFetch.ts'
import Explore from '@api/types/explore.ts'
import { urlParse } from '@api/utils.ts'

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
    const url = URL.parse(request.url) || new URL('')
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
        <main>
            <h1>{section}</h1>
            <h3>Results: {explore.count}</h3>
            <div className="page-navigation">
                {explore.previous && (
                    <Link to={urlParse(explore.previous)}>prev</Link>
                )}
                {explore.next && <Link to={urlParse(explore.next)}>next</Link>}
            </div>
            <ul>
                {explore.results.map((result) => {
                    return (
                        <li key={result.name || result.title}>
                            <Link to={urlParse(result.url)}>
                                {result.name || result.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Explorer
