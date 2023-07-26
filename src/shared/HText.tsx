import { ReactNode } from "react"

type Props = { children: ReactNode, className?: string }

const HText = ({ children, className }: Props) => {
    return (
        <h1 className={`basis-3/5 font-montserrat font-bold text-3xl ${className}`}>{children}</h1>
    )
}

export default HText