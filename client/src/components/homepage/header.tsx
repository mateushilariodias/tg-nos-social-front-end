import Link from "next/link";

function Header() {
    return (
        <header className="fixed z-10 w-full bg-slate-100 flex justify-between items-center py-5 px-72">
            <div>
                <Link className="font-bold text-sky-600 lg:text-5xl" href="#">Nós Social</Link>
            </div>
                <div className="hidden lg:flex lg:gap-5 items-center font-bold text-white text-xl">
                <Link href="/loginUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 rounded-lg">
                    <strong>Entrar como usuário</strong>
                </Link>
                <Link href="/registerUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 rounded-lg">
                    <strong>Cadastrar-se como usuário</strong>
                </Link>
            </div>
        </header>
    )
}
export default Header;