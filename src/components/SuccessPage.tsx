export default function SuccessPage() {
  return (
    <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 p-6 md:p-12 text-center rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary">
          Yay! Happy Valentine's Day! ❤️
        </h1>
        <p className="text-slate-300">I knew you would say yes!</p>

        {/* Framework for video */}
        <div className="w-full aspect-video bg-black/40 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="material-symbols-outlined text-6xl text-white/50">
            play_circle
          </span>
          <p className="absolute bottom-4 text-sm text-white/70">
            Video Asset Placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
