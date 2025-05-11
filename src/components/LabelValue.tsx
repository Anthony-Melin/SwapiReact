import { PropsWithChildren } from 'react'

type LabelValueProps = PropsWithChildren<{
    label: string
    value: string
    testid: string
}>

const LabelValue = ({
    label,
    value,
    testid,
    ...restProps
}: LabelValueProps) => {
    return (
        <p data-testid={testid} {...restProps}>
            {label}: {value}
        </p>
    )
}

export default LabelValue
