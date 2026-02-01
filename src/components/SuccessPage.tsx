import valentineVideo from "../assets/valentine.mp4";
import { useState } from "react";

export default function SuccessPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 p-6 md:p-12 text-center rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary">
          Yay! Happy Valentine's Day! ❤️
        </h1>
        <p className="text-slate-300">I knew you would say yes!</p>

        {/* Video Player - Portrait Mode Optimized */}
        <div className="relative group mx-auto w-fit rounded-3xl border border-white/10 shadow-2xl overflow-hidden bg-black/40">
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
              <span className="material-symbols-outlined animate-spin text-4xl text-primary">
                progress_activity
              </span>
            </div>
          )}
          <video
            src={valentineVideo}
            autoPlay
            loop
            controls
            playsInline
            onCanPlay={() => setIsVideoLoaded(true)}
            className={`block max-w-[90vw] max-h-[70vh] w-auto h-auto rounded-3xl transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
            onError={(e) => {
              // Fallback if video fails to load
              e.currentTarget.style.display = "none";
              e.currentTarget
                .parentElement!.querySelector(".placeholder-text")!
                .classList.remove("hidden");
              setIsVideoLoaded(true); // Hide loader on error
            }}
          />
          <div className="placeholder-text hidden absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60 min-w-[300px] min-h-[500px]">
            <span className="material-symbols-outlined text-4xl text-white/50 mb-2">
              videocam_off
            </span>
            <p className="text-white/80 font-medium">Video not found</p>
            <p className="text-white/50 text-xs mt-1">
              Please ensure "valentine.mp4" is in assets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
