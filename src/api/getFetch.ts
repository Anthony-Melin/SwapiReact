import { urlFormat } from '@api/utils.ts'

async function getFetch<T>(
    url: string = '',
    signal: AbortSignal | null = null
) {
    const response = await fetch(urlFormat(url), {
        signal: signal,
    })
    if (!response.ok) {
        throw new Error(
            `Error when getting data at ${url}: HTTP ${response.status}.`
        )
    }
    return (await response.json()) as T
}

export default getFetch
