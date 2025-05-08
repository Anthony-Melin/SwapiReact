import { PropsWithChildren } from 'react'

type FilmsProps = PropsWithChildren<{ values: string[] }>

const Films = ({ values, ...restProps }: FilmsProps) => {
    return (
        <div data-testid="films" {...restProps}>
            <p>Films</p>
            <ul>
                {values.map((value, index) => {
                    return <li key={`film-${index}`} data-testid={`film-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Films
