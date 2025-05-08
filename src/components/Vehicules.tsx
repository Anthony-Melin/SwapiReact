import { PropsWithChildren } from 'react'

type VehiculesProps = PropsWithChildren<{ values: string[] }>

const Vehicules = ({ values, ...restProps }: VehiculesProps) => {
    return (
        <div data-testid="vehicules" {...restProps}>
            <p data-testid="vehicules-title">Vehicules</p>
            {values.length === 0 ? (
                <p data-testid="vehicules-empty">No vehicules linked</p>
            ) : (
                <ul>
                    {values.map((value, index) => {
                        return (
                            <li
                                key={`vehicules-${index}`}
                                data-testid={`vehicules-${index}`}
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

export default Vehicules
