import { useState } from "react";
import { createPortal } from "react-dom";

interface ProposalPageProps {
  onYes: () => void;
}

export default function ProposalPage({ onYes }: ProposalPageProps) {
  const [isMoved, setIsMoved] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Button dimensions (approximate hardcoded to be safe, or could allow measuring)
    const btnWidth = 150;
    const btnHeight = 60;

    // Viewport dimensions with safer buffer
    const padding = 40;
    const maxWidth = window.innerWidth - btnWidth - padding;
    const maxHeight = window.innerHeight - btnHeight - padding;

    // Ensure positive range
    const safeMaxX = Math.max(padding, maxWidth > 0 ? maxWidth : 0);
    const safeMaxY = Math.max(padding, maxHeight > 0 ? maxHeight : 0);

    const safeX = Math.max(padding, Math.random() * safeMaxX);
    const safeY = Math.max(padding, Math.random() * safeMaxY);

    console.log(`Moving button to: ${safeX}, ${safeY}`); // Debug log

    setCoords({ x: safeX, y: safeY });
    setIsMoved(true);
  };

  const NoButtonContent = (
    <button
      style={
        isMoved
          ? {
              position: "fixed",
              top: `${coords.y}px`,
              left: `${coords.x}px`,
              transition: "top 0.2s ease-out, left 0.2s ease-out",
              zIndex: 9999,
            }
          : {}
      }
      onMouseEnter={moveButton}
      onClick={moveButton}
      className={`group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent border-2 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold tracking-wide transition-all duration-300 ${
        isMoved
          ? "w-12 h-12 p-0 text-sm bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-lg rounded-full"
          : "flex-1 sm:flex-none min-w-[120px] h-12 md:h-14 text-base px-6 scale-100"
      }`}
    >
      <span
        className={`material-symbols-outlined ${isMoved ? "text-[24px]" : "text-[20px]"} group-hover:hidden`}
      >
        close
      </span>
      <span
        className={`material-symbols-outlined ${isMoved ? "text-[24px]" : "text-[20px]"} hidden group-hover:block`}
      >
        sentiment_dissatisfied
      </span>
      <span className={isMoved ? "hidden" : "block"}>No</span>
    </button>
  );

  return (
    <div className="layout-content-container flex flex-col max-w-[600px] flex-1 z-10">
      {/* Illustration & Card */}
      <div className="@container w-full">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-10 p-6 md:p-12 text-center rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 shadow-xl">
          {/* Icon Circle with Glow */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center size-24 md:size-32 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-inner">
              <span className="material-symbols-outlined text-6xl md:text-7xl text-primary drop-shadow-sm transition-transform duration-500 group-hover:scale-110">
                volunteer_activism
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-3 md:gap-4 max-w-md">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
              Will you be my <span className="text-primary">Valentine?</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-300 text-sm md:text-lg font-light leading-relaxed">
              I've been waiting for the right moment to ask you this.{" "}
              <br className="hidden sm:block" />
              Please make me the happiest person alive.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 w-full justify-center items-center mt-2">
            <button
              onClick={onYes}
              className={`flex-1 sm:flex-none min-w-[120px] h-12 md:h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 text-white text-base font-bold tracking-wide shadow-lg shadow-primary/25 ${
                isMoved ? "w-full sm:w-full" : ""
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                check
              </span>
              <span>YES!</span>
            </button>

            {/* If moved, we render the actual button in a portal.
                If not moved, we render the button here. */}
            {isMoved
              ? createPortal(NoButtonContent, document.body)
              : NoButtonContent}
          </div>

          {/* Subtle Hint */}
          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-wider uppercase opacity-60">
            Think carefully...
          </p>
        </div>
      </div>
    </div>
  );
}
