import Link from "next/link";

function Header(){
    return (
        <header className="fixed z-10 w-full bg-slate-100 flex justify-between items-center py-5">
            <Link className="font-bold text-sky-600 text-3xl" href='/homepage'>Nós Social</Link>    
        </header>
    )
}
export default Header;