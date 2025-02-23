import { ClientLoaderFunctionArgs, useLoaderData } from 'react-router'
import getFetch from '@api/getFetch.ts'
import Details from '@api/types/details.ts'

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
    const url = new URL(request.url)
    return {
        details: await getFetch<Details>(url.pathname, request.signal),
    }
}

const Description = () => {
    const {
        details: { name, title, ...restKeys },
    } = useLoaderData() as Awaited<ReturnType<typeof clientLoader>>
    return (
        <>
            <h3>{name || title}</h3>
            {Object.entries(restKeys).map(([key, value]) => {
                if (typeof value === 'string') {
                    return (
                        <p>
                            {key}: {value}
                        </p>
                    )
                }
            })}
        </>
    )
}

export default Description
