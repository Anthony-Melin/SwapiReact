import { PropsWithChildren } from 'react'

type VehiculesProps = PropsWithChildren<{ values: string[] }>

const Vehicules = ({ values, ...restProps }: VehiculesProps) => {
    return (
        <div datatest-id="vehicules" {...restProps}>
            <p>Vehicules</p>
            <ul>
                {values.map((value, index) => {
                    return <li datatest-id={`vehicule-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Vehicules
