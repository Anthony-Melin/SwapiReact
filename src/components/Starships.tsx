import { PropsWithChildren } from 'react'

type StarshipsProps = PropsWithChildren<{ values: string[] }>

const Starships = ({ values, ...restProps }: StarshipsProps) => {
    return (
        <div data-testid="starships" {...restProps}>
            <p>Starships</p>
            <ul>
                {values.map((value, index) => {
                    return <li key={`starship-${index}`} data-testid={`starship-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Starships
