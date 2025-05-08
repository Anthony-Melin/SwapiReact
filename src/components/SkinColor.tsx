import { PropsWithChildren } from 'react'

type SkinColorProps = PropsWithChildren<{ value: string }>

const SkinColor = ({ value, ...restProps }: SkinColorProps) => {
    return (
        <p datatest-id="skincolor" {...restProps}>
            Skin color: {value}
        </p>
    )
}

export default SkinColor
