import { PropsWithChildren } from 'react'

type FilmsProps = PropsWithChildren<{ values: string[] }>

const Films = ({ values, ...restProps }: FilmsProps) => {
    return (
        <div datatest-id="films" {...restProps}>
            <p>Films</p>
            <ul>
                {values.map((value, index) => {
                    return <li datatest-id={`film-${index}`}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Films
