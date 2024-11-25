export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className='bg-white text-gray-900 text-center lg:text-left py-10 lg:flex lg:py-12 lg:px-4 lg:items-center lg:justify-between lg:gap-16'>   
                <div>
                    Menu facilitado.
                </div>
                <address className='text-lg font-normal'>
                    <p className='pb-2 text-xl font-black'>Fale conosco</p>
                    <a href='telto:(16) 99999-9999'>(16) 99999-9999</a><br />
                    <a href='mailto:atendimento@nossocial.com.br'>atendimento@nossocial.com.br</a>
                </address>
                <div>
                    Logo de marca dos futuros parceiros do projeto.
                </div>
            </div>
        </footer>
    )
}