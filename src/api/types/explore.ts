type Explore = {
    count: number
    next?: string
    previous?: string
    results: Array<{
        name: string
        title: string
        url: string
    }>
}

export default Explore
