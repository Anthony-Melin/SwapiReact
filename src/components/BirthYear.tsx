import { PropsWithChildren } from 'react'

type BirthYearProps = PropsWithChildren<{ value: string }>

const BirthYear = ({ value, ...restProps }: BirthYearProps) => {
    return (
        <p datatest-id="birthyear" {...restProps}>
            BirthYear: {value}
        </p>
    )
}

export default BirthYear
