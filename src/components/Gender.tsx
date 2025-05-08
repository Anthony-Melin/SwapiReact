import { PropsWithChildren } from 'react'

type GenderProps = PropsWithChildren<{ value: string }>

const Gender = ({ value, ...restProps }: GenderProps) => {
    return (
        <p data-testid="gender" {...restProps}>
            Gender: {value}
        </p>
    )
}

export default Gender
