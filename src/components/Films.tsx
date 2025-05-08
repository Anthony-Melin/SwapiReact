import { PropsWithChildren } from 'react'

type FilmsProps = PropsWithChildren<{ values: string[] }>

const Films = ({ values, ...restProps }: FilmsProps) => {
    return (
        <div data-testid="films" {...restProps}>
            <p data-testid="films-title">Films</p>
            {values.length === 0 ? (
                <p data-testid="films-empty">No films linked</p>
            ) : (
                <ul>
                    {values.map((value, index) => {
                        return (
                            <li
                                key={`films-${index}`}
                                data-testid={`films-${index}`}
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

export default Films
