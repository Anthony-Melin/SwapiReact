export const urlParse = (url: string) => {
    const path = url.split('api/').pop() as string
    return `/${path.replace(/^\/*/g, '').replace(/\/$/, '')}`
}

export const urlFormat = (root: string, url: string) => {
    return url
        .replace(root, `/${root}/api/`)
        .replace(/\?page=/, '/page/')
        .concat('.json')
        .replace(/\/{2,}/g, '/')
}
