import { PropsWithChildren } from 'react'

type SpeciesProps = PropsWithChildren<{ values: string[] }>

const Species = ({ values, ...restProps }: SpeciesProps) => {
    return (
        <div data-testid="species" {...restProps}>
            <p data-testid="species-title">Species</p>
            {values.length === 0 ? (
                <p data-testid="species-empty">No species linked</p>
            ) : (
                <ul>
                    {values.map((value, index) => {
                        return (
                            <li
                                key={`species-${index}`}
                                data-testid={`species-${index}`}
                            >
                                {value}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Species
