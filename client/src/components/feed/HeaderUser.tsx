import Link from "next/link";
import { useContext, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "@/context/userContext";
import { INgo, IUser } from "@/interfaces";
import { makeRequest } from "../../../axios";

function Header() {
    const { user, setUser } = useContext(UserContext);
    const [showMenu, setShowMenu] = useState(false);
    const [search, setSearch] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);

    const { data, error } = useQuery({
        queryKey: ['search'],
        queryFn: () => makeRequest.get(`search/search-users?params=${search}`).then((res) => {
            return res.data;
        }),
        enabled: !!search
    });

    if (error) {
        console.log(error);
    }

    return (
        <header className="fixed z-10 w-full bg-white flex justify-between items-center py-4 px-4 md:px-10 lg:px-40 shadow-sm">
            <Link href="/" className="font-bold text-sky-600 text-2xl">Nós Social</Link>
            <div className="hidden md:flex bg-zinc-100 items-center text-gray-600 py-1 px-3 rounded-full relative">
                <input className="bg-zinc-100 focus-visible:outline-none py-2 px-4" type="text" name="search" id="search" placeholder="Pesquisar" value={search ? search : ""} onChange={(e) => setSearch(e.target.value)} />
                <FaSearch />
            </div>
            {search && searchResults && (
                <div className="absolute flex flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-0 left-0 top-[100%] z-20">
                    {data?.map((ngos: INgo, id: number) => {
                        return (
                            <Link href={`/profile?id=${ngos.id}`} key={id} className="flex items-center gap-2" onClick={() => (setSearch(null), setSearchResults(false))}>
                                <img src={ngos.imageNgo ? ngos.imageNgo : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full" />
                                <span className="font-bold">{ngos.pageName}</span>
                            </Link>
                        );
                    })}
                    <Link href={`/search?params=${search}`} className="font-semibold border-t border-zinc-300 text-center pt-2" onClick={() => (setSearch(null), setSearchResults(false))}>Ver todos os resultados.</Link>
                </div>
            )}
            <div className="hidden md:flex">
            <Link href="/registerNgo" className="bg-blue-600 hover:bg-blue-800 py-3 px-6 font-bold text-white rounded-lg">
                    <strong>Cadastrar ONG</strong>
                </Link>
            </div>
            <div className="hidden md:flex gap-5 items-center text-gray-600">
                <div className="relative" onMouseLeave={() => setShowMenu(false)}>
                    <button className="flex gap-2 items-center" onClick={() => setShowMenu(!showMenu)}>
                        <img className="w-8 h-8 rounded-full" src={user ? user.userImg : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" />
                        <span className="font-bold">{user?.userName}</span>
                    </button>
                    {showMenu && (
                        <nav className="absolute flex flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-8px] z-20">
                            <Link href="/userConfiguration" className="border-b">Configurações do perfil</Link>
                            <Link href="/feedNgo" className="border-b">Entrar como ONG</Link>
                            <Link href="">Logout</Link>
                        </nav>
                    )}
                </div>
            </div>
            <div className="flex md:hidden items-center">
                <FaSearch onClick={() => setShowSearchModal(true)} className="text-2xl text-sky-600 cursor-pointer mr-4" />
                <FaBars onClick={() => setShowMobileMenu(true)} className="text-2xl text-sky-600 cursor-pointer" />
            </div>
            {showSearchModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-start pt-5 text-gray-600">
                    <div className="bg-white p-4 rounded-md w-11/12 max-w-sm mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-xl">Pesquisar</span>
                            <FaTimes onClick={() => setShowSearchModal(false)} className="text-2xl text-sky-600 cursor-pointer" />
                        </div>
                        <input className="bg-zinc-100 focus-visible:outline-none py-2 px-4 mb-4 w-full" type="text" name="search" id="search" placeholder="Pesquisar" value={search ? search : ""} onChange={(e) => setSearch(e.target.value)} />
                        {data?.map((users: IUser, id: number) => {
                            return (
                                <Link href={`/profile?id=${users.id}`} key={id} className="flex items-center gap-2 mb-2" onClick={() => setShowSearchModal(false)}>
                                    <img src={users.userImg ? users.userImg : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full" />
                                    <span className="font-bold">{users.userName}</span>
                                </Link>
                            );
                        })}
                        <Link href={`/search?params=${search}`} className="font-semibold text-center pt-2" onClick={() => setShowSearchModal(false)}>Ver todos os resultados.</Link>
                    </div>
                </div>
            )}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-start pt-5 text-gray-600">
                    <div className="bg-white p-4 rounded-md w-11/12 max-w-sm mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-xl">Menu</span>
                            <FaTimes onClick={() => setShowMobileMenu(false)} className="text-2xl text-sky-600 cursor-pointer" />
                        </div>
                        <nav className="flex flex-col gap-4">
                            <Link href="/registerNgo" className="bg-blue-600 hover:bg-blue-800 py-3 px-6 font-bold text-white rounded-lg text-center" onClick={() => setShowMobileMenu(false)}>
                                <strong>Cadastrar ONG</strong>
                            </Link>
                            <Link href="/userConfiguration" className="border-b" onClick={() => setShowMobileMenu(false)}>Configurações do perfil</Link>
                            <Link href="/feedNgo" className="border-b" onClick={() => setShowMobileMenu(false)}>Entrar como ONG</Link>
                            <Link href="" onClick={() => setShowMobileMenu(false)}>Logout</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
export default Header;