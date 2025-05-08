import { PropsWithChildren } from 'react'

type SpeciesProps = PropsWithChildren<{ values: string[] }>

const Species = ({ values, ...restProps }: SpeciesProps) => {
    return (
        <div datatest-id="species" {...restProps}>
            <p>Species</p>
            <ul>
                {values.map((value, index) => {
                    return <li key={`species-${index}`} datatest-id={`species-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Species
