import { urlFormat } from '@api/utils.ts'

async function getFetch<T>(
    url: string = import.meta.env.BASE_URL.concat('/root'),
    signal: AbortSignal | null = null
) {
    const response = await fetch(
        urlFormat(import.meta.env.VITE_BASE_URL, url),
        {
            signal: signal,
        }
    )
    if (!response.ok) {
        throw new Error(
            `Error when getting data at ${url}: HTTP ${response.status}.`
        )
    }
    return (await response.json()) as T
}

export default getFetch
