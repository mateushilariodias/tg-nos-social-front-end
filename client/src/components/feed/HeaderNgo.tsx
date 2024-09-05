import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { INgo } from "@/interfaces";
import { NgoContext } from "@/context/ngoContext";
import { api } from "@/services/api";

function Header() {
    const { ngo, setNgo } = useContext(NgoContext);
    const [showMenu, setShowMenu] = useState(false);
    const [search, setSearch] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const router = useRouter();
    
    const mutation = useMutation({
        mutationFn: async () => {
            return await api.post("auth/logout").then((res) => {
                res.data;
            });
        },
        onSuccess: () => {
            setNgo(undefined);
            localStorage.removeItem("nos-social:user");
            router.push("/loginUser");
        },
    });

    const { data, error } = useQuery({
        queryKey: ['search'],
        queryFn: () => api.get(`search/search-users?params=${search}`).then((res) => {
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
            <div className="hidden md:flex bg-zinc-100 items-center text-gray-600 py-1 px-3 rounded-full relative" onClick={() => setSearchResults(true)} onMouseLeave={() => setSearchResults(false)}>
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
            <div className="hidden md:flex gap-5 items-center text-gray-600">
                <div className="relative" onMouseLeave={() => setShowMenu(false)}>
                    <button className="flex gap-2 items-center" onClick={() => setShowMenu(!showMenu)}>
                        <img className="w-8 h-8 rounded-full" src={ngo ? ngo.imageNgo : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" />
                        <span className="font-bold">{ngo?.pageName}</span>
                    </button>
                    {showMenu && (
                        <nav className="absolute flex flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-8px] z-20">
                            <Link href="/ngoConfiguration" className="border-b">Perfil da ONG</Link>
                            <Link href="/feedUser" className="border-b">Entrar como usuário comum</Link>
                            <Link href="" onClick={() => mutation.mutate()}>Logout</Link>
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
                        {data?.map((ngos: INgo, id: number) => {
                            return (
                                <Link href={`/profile?id=${ngos.id}`} key={id} className="flex items-center gap-2 mb-2" onClick={() => (setSearch(null), setSearchResults(false), setShowSearchModal(false))}>
                                    <img src={ngos.imageNgo ? ngos.imageNgo : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" className="w-8 h-8 rounded-full" />
                                    <span className="font-bold">{ngos.pageName}</span>
                                </Link>
                            );
                        })}
                        <Link href={`/search?params=${search}`} className="font-semibold text-center pt-2" onClick={() => (setSearch(null), setSearchResults(false), setShowSearchModal(false))}>Ver todos os resultados.</Link>
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
                            <Link href="/ngoConfiguration" className="border-b" onClick={() => setShowMobileMenu(false)}>Perfil da ONG</Link>
                            <Link href="/feedUser" className="border-b" onClick={() => setShowMobileMenu(false)}>Entrar como usuário comum</Link>
                            <Link href="" onClick={() => { mutation.mutate(); setShowMobileMenu(false); }}>Logout</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
export default Header;