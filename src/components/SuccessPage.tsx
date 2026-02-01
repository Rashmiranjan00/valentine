import valentineVideo from "../assets/valentine.mp4";

export default function SuccessPage() {
  return (
    <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 p-6 md:p-12 text-center rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary">
          Yay! Happy Valentine's Day! ❤️
        </h1>
        <p className="text-slate-300">I knew you would say yes!</p>

        {/* Video Player - Portrait Mode Optimized */}
        <div className="w-full max-w-[320px] md:max-w-[400px] aspect-[9/16] bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl mx-auto">
          <video
            src={valentineVideo}
            autoPlay
            loop
            muted
            controls
            playsInline
            className="w-full h-full object-contain rounded-xl"
            onError={(e) => {
              // Fallback if video fails to load
              e.currentTarget.style.display = "none";
              e.currentTarget
                .parentElement!.querySelector(".placeholder-text")!
                .classList.remove("hidden");
            }}
          />
          <div className="placeholder-text hidden absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60">
            <span className="material-symbols-outlined text-4xl text-white/50 mb-2">
              videocam_off
            </span>
            <p className="text-white/80 font-medium">Video not found</p>
            <p className="text-white/50 text-xs mt-1">
              Please add "valentine.mp4" to the public folder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
