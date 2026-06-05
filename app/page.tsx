import Hero from "@/components/hero";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative ">
        
        {/* Navbar */}
        <nav className="flex items-center justify-around px-10 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <p className="font-semibold tracking-widest text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 to-blue-900">
              JC
            </p>
            <p className="font-semibold tracking-wide">
              Portfolio
            </p>
          </div>
          
          <div className="flex gap-12 text-sm text-white/70">
            <a href="#">Dashboard</a>
            <a href="#">Projects</a>
            <a href="#">AI</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        {/* Hero placeholder */}
          <Hero />
      </div>
    </main>
  );
}