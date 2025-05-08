import { PropsWithChildren } from 'react'

type StarshipsProps = PropsWithChildren<{ values: string[] }>

const Starships = ({ values, ...restProps }: StarshipsProps) => {
    return (
        <div datatest-id="starships" {...restProps}>
            <p>Starships</p>
            <ul>
                {values.map((value, index) => {
                    return <li datatest-id={`starship-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Starships
