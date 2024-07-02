"use client";  // Adicione esta linha

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="fixed z-10 w-full bg-white flex justify-between items-center p-4 lg:px-40 shadow-sm">
            <Link className="font-bold text-sky-600 text-3xl lg:text-4xl" href='/'>Nós Social</Link>
            <nav className="hidden lg:flex lg:gap-5 items-center text-gray-600">
                <Link href="/loginUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white text-lg rounded-lg">
                    <strong>Entrar como usuário</strong>
                </Link>
                <Link href="/registerUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white text-lg rounded-lg">
                    <strong>Cadastrar-se como usuário</strong>
                </Link>
            </nav>
            <div className="flex lg:hidden">
                <FaBars onClick={() => setShowMobileMenu(true)} className="text-2xl text-sky-600 cursor-pointer" />
            </div>
            {showMobileMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-start pt-5 text-gray-600">
                    <div className="bg-white p-4 rounded-md w-11/12 max-w-sm mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-xl">Menu</span>
                            <FaTimes onClick={() => setShowMobileMenu(false)} className="text-2xl text-sky-600 cursor-pointer" />
                        </div>
                        <nav className="flex flex-col gap-4">
                            <Link href="/loginUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white text-center rounded-lg" onClick={() => setShowMobileMenu(false)}>
                                <strong>Entrar como usuário</strong>
                            </Link>
                            <Link href="/registerUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white text-center rounded-lg" onClick={() => setShowMobileMenu(false)}>
                                <strong>Cadastrar-se como usuário</strong>
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;