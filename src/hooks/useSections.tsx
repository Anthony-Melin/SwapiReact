import { createContext, use } from 'react'

export const SectionContext = createContext<Record<string, string>>({})

const useSection = () => {
    return use(SectionContext)
}

export default useSection
