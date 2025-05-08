import { PropsWithChildren } from 'react'

type VehiculesProps = PropsWithChildren<{ values: string[] }>

const Vehicules = ({ values, ...restProps }: VehiculesProps) => {
    return (
        <div data-testid="vehicules" {...restProps}>
            <p>Vehicules</p>
            <ul>
                {values.map((value, index) => {
                    return <li key={`vehicule-${index}`} data-testid={`vehicule-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Vehicules
