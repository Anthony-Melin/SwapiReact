import { PropsWithChildren } from 'react'

type StarshipsProps = PropsWithChildren<{ values: string[] }>

const Starships = ({ values, ...restProps }: StarshipsProps) => {
    return (
        <div data-testid="starships" {...restProps}>
            <p data-testid="starships-title">Starships</p>
            {values.length === 0 ? (
                <p data-testid="starships-empty">No starships linked</p>
            ) : (
                <ul>
                    {values.map((value, index) => {
                        return (
                            <li
                                key={`starships-${index}`}
                                data-testid={`starships-${index}`}
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

export default Starships
