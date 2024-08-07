function AuthPage({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center bg-gray-800 p-5 lg:py-10 lg:px-0">
            <form action="" className="flex flex-col bg-gray-50 py-8 px-6 lg:p-10 rounded-2xl gap-5 text-gray-800 w-full lg:w-3/6">
                {children}
            </form>
        </main>
    );
}
export default AuthPage;