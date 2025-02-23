
import Image from 'next/image'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen">
      {/* Left Section */}
      <div className=" w-full justify-items-center px-4 sm:w-1/2">
        <div className="space-y-8">
          {/* Logo */}
          <div className="text-center my-20 ">
            <h1 className="text-6xl font-bold">
              <span className="text-[#7C3AED]">Swipe</span>Hire
            </h1>
            <p className="text-lg mt-2 text-muted-foreground">Internship Hiring Made Simple</p>
          </div>
        </div>

        {children}
      </div>

      {/* Right Section */}
      <div className="hidden sm:block sm:w-1/2">
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/img.avif")',
          }}
        >
          <div className="absolute inset-0 bg-black/40">
            <div className="flex h-full flex-col items-start justify-end p-12 text-white">
              <h2 className="mb-2 text-4xl font-bold">
                Welcome to <span className="text-[#7C3AED]">SwipeHire</span>
              </h2>
              <p className="mb-8 max-w-md text-lg">
                With SwipeHire, explore opportunities, connect with companies, and jumpstart your career—all in one
                place.
              </p>
              <div className="flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                <div className="h-2 w-2 rounded-full bg-white" />
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
