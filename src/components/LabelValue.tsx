import { PropsWithChildren } from 'react'

type LabelValueProps = PropsWithChildren<{
    label: string
    value: string
    testid: string
    remap?: Record<string, string>
}>

const LabelValue = ({
    label,
    value,
    testid,
    remap = {},
    ...restProps
}: LabelValueProps) => {
    const displayedValue = value in remap ? remap[value] : value
    return (
        <p data-testid={testid} {...restProps}>
            {label}: {displayedValue}
        </p>
    )
}

export default LabelValue
