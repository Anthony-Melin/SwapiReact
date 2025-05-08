const SWAPI_URL = import.meta.env.VITE_SWAPI_URL

export const urlParse = (url: string) => {
    return url.replace(SWAPI_URL, '').replace(/\/$/, '').replace(/\/\//, '/')
}

export const urlFormat = (url: string) => {
    return url.startsWith('/') ? `${SWAPI_URL}${url}` : `${SWAPI_URL}/${url}`
}
