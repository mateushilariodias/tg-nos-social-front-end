import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

function HeroSection() {

    return (
        <section className="w-full pt-24 pb-10 px-4 lg:pt-44 lg:pb-12 xl:pb-20 lg:px-16 xl:px-40 bg-blue-800 text-white">
            <article className="lg:flex lg:flex-row">
                <div className="w-full my-auto">
                    <h1 className="font-bold text-4xl pb-5">Bem-vindo(a) a <br /> <span className="text-5xl">Nós Social - São Paulo!</span></h1>
                    <h2 className="font-medium text-4xl pb-4 lg:pb-10">Eu + Você = Nós pela sociedade</h2>
                    <Link href="/registerUser" className="hidden lg:inline-flex bg-white hover:bg-slate-100 lg:mb-0 py-4 px-6 font-bold text-blue-800 rounded-lg text-sm lg:text-lg uppercase text-center">
                        <strong>Cadastrar-se como usuário</strong>
                    </Link>
                </div>
                <div className="lg:hidden w-auto flex justify-center items-center pb-10 lg:pb-0">
                    <img className="w-auto" src="images/hero.jpeg" alt="Imagem de vários icones de pessoas conectadas." />
                </div>
                <Link href="/registerUser" className="lg:hidden inline-flex bg-white hover:bg-slate-100 lg:mb-0 py-4 px-6 font-bold text-blue-800 rounded-lg text-sm lg:text-lg uppercase text-center">
                    <strong>Cadastrar-se como usuário</strong>
                </Link>
                <div className="hidden w-auto lg:flex lg:justify-end xl:justify-center items-center mt-10 lg:mt-0">
                    <img className="w-2/3" src="images/hero.jpeg" alt="Imagem de vários icones de pessoas conectadas." />
                </div>
                <Link href="#aboutSection">
                    <GoArrowDown className="lg:hidden mt-8 mx-auto h-10 w-10 animate-bounce" />
                </Link>
            </article>
            <Link href="#aboutSection">
                <GoArrowDown className="hidden lg:flex animate-bounce mt-8 lg:mt-4 mx-auto h-10 w-10" />
            </Link>
        </section>
    )
}
export default HeroSection;