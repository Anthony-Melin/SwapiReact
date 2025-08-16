import { createContext, use } from 'react'

export const NamesContext = createContext<Record<string, string>>({})

const useNames = () => {
    return use(NamesContext)
}

export default useNames
