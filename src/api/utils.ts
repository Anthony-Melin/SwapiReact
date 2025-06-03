export const urlParse = (url: string) => {
    const path = url.split('api/').pop() as string
    return `/${path.replace(/^\/*/g, '').replace(/\/$/, '')}`
}

export const urlFormat = (root: string, url: string) => {
    const u = new URL(url.replace(/^\/*/g, '').replace(/^api\//, ''), 'http://127.0.0.1:8080/')
    const base = u.searchParams.has('page') ? `${u.pathname}/page/${u.searchParams.get('page')}` : u.pathname
    return `/${root}/api/${base.replace(/\/$/, '')}.json`.replace('/.json', '.json').replace(/\/+/g, '/')
}
