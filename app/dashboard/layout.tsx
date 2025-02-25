


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="border-b p-4 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <span className="font-bold text-xl">Your Logo</span>
                    {/* Add your logo component or image here */}
                </div>

                {/* Right: Avatar (Shadcn) */}
                <div className="flex items-center">
                    {/* Replace with your Shadcn Avatar component */}
                    <div className="rounded-full h-10 w-10 bg-gray-300">
                        {/*Avatar content goes here*/}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
}
