import Carrinho from "./carrinho";
import Logo from "./Logo";

export default function Cabecalho() {
    return (
        <header className="flex justify-between items-center h-20 px-10">
            <Logo />
            <Carrinho />
        </header>
    )
}