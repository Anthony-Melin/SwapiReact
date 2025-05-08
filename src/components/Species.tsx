import { PropsWithChildren } from 'react'

type SpeciesProps = PropsWithChildren<{ values: string[] }>

const Species = ({ values, ...restProps }: SpeciesProps) => {
    return (
        <div data-testid="species" {...restProps}>
            <p>Species</p>
            <ul>
                {values.map((value, index) => {
                    return <li key={`species-${index}`} data-testid={`species-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Species
