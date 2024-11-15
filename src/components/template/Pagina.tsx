import Cabecalho from "./Cabecalho"

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col">
            <Cabecalho />
            <main className={`w-[1600px] mx-auto bg-white min-h-screen h-full py-10 ${props.className ?? ''}`}>{props.children}</main>
        </div>
    )
}