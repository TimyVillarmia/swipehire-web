


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">

            </div>
            <div className="col-span-10 bg-slate-400">
                {children}
            </div>
        </div>
    );
}
