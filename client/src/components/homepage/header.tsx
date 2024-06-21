"use client";  // Adicione esta linha

import Link from "next/link";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className="fixed z-10 w-full bg-white flex justify-between items-center py-3 px-4 lg:px-40 shadow-sm">
            <Link className="font-bold text-sky-600 text-3xl" href='/'>Nós Social</Link>
            <div className="hidden lg:flex lg:gap-5 items-center text-gray-600">
                <Link href="/loginUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white rounded-lg">
                    <strong>Entrar como usuário</strong>
                </Link>
                <Link href="/registerUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white rounded-lg">
                    <strong>Cadastrar-se como usuário</strong>
                </Link>
            </div>
            <div className="flex lg:hidden pr-4">
                <FiAlignJustify onClick={() => setShowMobileMenu(true)} />
            </div>

            {showMobileMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-sm text-center">
                        <button className="absolute top-4 right-4 text-gray-600" onClick={() => setShowMobileMenu(false)}>
                            <FaTimes size={20} />
                        </button>
                        <div className="flex flex-col gap-4">
                            <Link href="/loginUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white rounded-lg">
                                <strong>Entrar como usuário</strong>
                            </Link>
                            <Link href="/registerUser" className="bg-blue-600 hover:bg-blue-800 py-3 px-5 font-bold text-white rounded-lg">
                                <strong>Cadastrar-se como usuário</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
