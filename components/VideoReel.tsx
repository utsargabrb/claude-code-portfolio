"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { videos } from "@/lib/portfolio";

export function VideoReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Play the active video, pause others
  const syncPlayback = useCallback((index: number) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.play().catch(() => undefined);
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, []);

  useEffect(() => {
    syncPlayback(activeIndex);
  }, [activeIndex, syncPlayback]);

  // IntersectionObserver – snap which video is "active" while scrolling
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    const slides = containerRef.current?.querySelectorAll("[data-index]");
    slides?.forEach((slide) => observerRef.current?.observe(slide));

    return () => observerRef.current?.disconnect();
  }, []);

  // Navigate with arrow buttons
  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, videos.length - 1));
    const slides = containerRef.current?.querySelectorAll("[data-index]");
    slides?.[clamped]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveIndex(clamped);
  }

  return (
    <section id="reel" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
              Motion Reel
            </p>
            <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
              Watch the{" "}
              <span className="text-accent-bright">signal</span> move.
            </h2>
          </div>

          {/* Controls row */}
          <div className="flex items-center gap-3">
            {/* Mute toggle */}
            <button
              type="button"
              onClick={() => {
                setMuted((m) => {
                  const next = !m;
                  videoRefs.current.forEach((v) => {
                    if (v) v.muted = next;
                  });
                  return next;
                });
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-accent hover:text-accent-bright"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            {/* Prev / Next */}
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() => goTo(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-accent hover:text-accent-bright disabled:opacity-30"
              aria-label="Previous video"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button
              type="button"
              disabled={activeIndex === videos.length - 1}
              onClick={() => goTo(activeIndex + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-accent hover:text-accent-bright disabled:opacity-30"
              aria-label="Next video"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

        {/* TikTok-style layout: side dots + scroll container */}
        <div className="flex gap-6 items-start">
          {/* Side dot indicators */}
          <div className="hidden md:flex flex-col gap-2.5 pt-4 sticky top-[50vh] -translate-y-1/2 self-center">
            {videos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="group flex items-center gap-2"
                aria-label={`Go to video ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "h-6 w-1.5 bg-accent-bright"
                      : "h-1.5 w-1.5 bg-border group-hover:bg-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Scroll container — phone-like 9:16 frame */}
          <div className="flex-1">
            <div className="relative mx-auto w-full max-w-sm md:max-w-[340px]">
              {/* Phone chrome */}
              <div className="relative rounded-[2.5rem] border-4 border-border bg-black shadow-[0_40px_120px_rgba(0,0,0,0.7)] overflow-hidden">
                {/* Notch */}
                <div className="relative z-10 flex justify-center pt-3 pb-1">
                  <div className="h-6 w-24 rounded-full bg-[#111]" />
                </div>

                {/* Snap scroll viewport */}
                <div
                  ref={containerRef}
                  className="h-[620px] overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {videos.map((video, i) => (
                    <div
                      key={video.id}
                      data-index={i}
                      className="relative h-[620px] w-full snap-start snap-always flex-shrink-0 overflow-hidden bg-black"
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        src={video.src}
                        muted={muted}
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      />

                      {/* Overlay gradient */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/60">
                          {i + 1} / {videos.length}
                        </p>
                        <p className="mt-1 font-display text-base font-semibold text-white">
                          {video.title}
                        </p>
                      </div>

                      {/* Right-side TikTok action bar */}
                      <div className="absolute right-3 bottom-20 flex flex-col gap-4 items-center">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-2 bg-black">
                  <div className="h-1 w-20 rounded-full bg-white/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side: video list */}
          <div className="hidden lg:flex flex-col gap-3 flex-1 pt-4">
            {videos.map((video, i) => (
              <button
                key={video.id}
                type="button"
                onClick={() => goTo(i)}
                className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                  i === activeIndex
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-background hover:border-accent/40 hover:bg-card"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-accent text-foreground"
                      : "bg-card text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      i === activeIndex ? "text-accent-bright" : "text-foreground"
                    }`}
                  >
                    {video.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {i === activeIndex ? "▶ Now playing" : "Click to play"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
