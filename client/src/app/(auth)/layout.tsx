function AuthPage({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center bg-gray-900 p-5 lg:p-0">
            <form action="" className="flex flex-col bg-gray-50 py-8 px-6 lg:p-10 rounded-2xl gap-5 text-gray-800 w-full lg:w-1/3">
                {children}
            </form>
        </main>
    );
}
export default AuthPage;