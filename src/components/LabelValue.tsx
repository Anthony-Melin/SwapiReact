import { FC, PropsWithChildren } from 'react'

type LabelValueProps = PropsWithChildren<{
    label: string
    value: string
    testid: string
    remap?: Record<string, string>
    Wrap?: FC<PropsWithChildren>
}>

const LabelValue = ({
    label,
    value,
    testid,
    remap = {},
    Wrap = ({...props}) => <p {...props} />,
    ...restProps
}: LabelValueProps) => {
    const displayedValue = value in remap ? remap[value] : value
    return (
        <Wrap data-testid={testid} {...restProps}>
            {label}: {displayedValue}
        </Wrap>
    )
}

export default LabelValue
