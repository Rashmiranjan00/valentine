import { useState } from "react";
import ProposalPage from "./components/ProposalPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  const [accepted, setAccepted] = useState<boolean>(false);

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <span className="material-symbols-outlined floating-heart delay-1 absolute">
          favorite
        </span>
        <span className="material-symbols-outlined floating-heart delay-2 absolute">
          favorite
        </span>
        <span className="material-symbols-outlined floating-heart delay-3 absolute">
          favorite
        </span>
        <span className="material-symbols-outlined floating-heart delay-4 absolute">
          favorite
        </span>
        <span className="material-symbols-outlined floating-heart delay-5 absolute">
          favorite
        </span>
        <span className="material-symbols-outlined floating-heart delay-6 absolute">
          favorite
        </span>
        <span className="material-symbols-outlined floating-heart delay-7 absolute">
          favorite
        </span>
      </div>

      {/* Main Container */}
      <div className="layout-container flex h-screen w-full flex-col relative z-10 overflow-hidden">
        {/* Navbar */}
        <div className="w-full flex justify-center py-4 absolute top-0 left-0 z-20">
          <header className="flex items-center justify-between w-full max-w-[960px] px-6 md:px-10">
            <div className="flex items-center gap-3 text-slate-900 dark:text-white group cursor-pointer">
              <div className="size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[20px] fill-1">
                  favorite
                </span>
              </div>
              <h2 className="text-lg font-bold tracking-tight">My Valentine</h2>
            </div>
            <nav className="hidden sm:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a className="hover:text-primary transition-colors" href="#">
                Our Story
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Gallery
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Contact
              </a>
            </nav>
          </header>
        </div>

        {/* Hero Content */}
        <main className="flex-1 flex items-center justify-center px-4 md:px-40 py-5">
          {accepted ? (
            <SuccessPage />
          ) : (
            <ProposalPage onYes={() => setAccepted(true)} />
          )}
        </main>

        {/* Footer Decoration */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none z-10"></div>
      </div>
    </>
  );
}

export default App;
