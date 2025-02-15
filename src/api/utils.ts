const SWAPI_URL = 'https://swapi.dev/api'

export const urlParse = (url: string) => {
    // return URL.parse(url)?.pathname.split('/api').pop() || ''
    return url.replace(SWAPI_URL, '').replace(/\/$/, '').replace(/\/\//, '/')
}

export const urlFormat = (url: string) => {
    return url.startsWith('/') ? `${SWAPI_URL}${url}` : `${SWAPI_URL}/${url}`
}
