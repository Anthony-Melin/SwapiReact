import { PropsWithChildren } from 'react'

type SkinColorProps = PropsWithChildren<{ value: string }>

const SkinColor = ({ value, ...restProps }: SkinColorProps) => {
    return (
        <p data-testid="skincolor" {...restProps}>
            Skin color: {value}
        </p>
    )
}

export default SkinColor
