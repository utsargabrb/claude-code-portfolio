"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDE_H = 640;

const media = [
  { type: "image", src: "/assets/work/lhotse-car-fragrance.png", label: "LHOTSE", sub: "Car Fragrance", accent: "#2d5016", likes: "12.4K", comments: "342", shares: "1.2K" },
  { type: "video", src: "/videos/por-1.mp4", label: "Reel I", sub: "Portfolio Reel", accent: "#c45c26", likes: "45.1K", comments: "892", shares: "4.5K" },
  { type: "image", src: "/assets/work/ignite-utx-ai.png", label: "IGNITE", sub: "utx.ai Campaign", accent: "#a3ff00", likes: "28.9K", comments: "512", shares: "2.8K" },
  { type: "video", src: "/videos/generated-video.mp4", label: "Generated I", sub: "AI Visual", accent: "#8b5cf6", likes: "89.3K", comments: "1.4K", shares: "9.1K" },
  { type: "video", src: "/videos/por-2.mp4", label: "Reel II", sub: "Portfolio Reel", accent: "#3b82f6", likes: "34.2K", comments: "623", shares: "3.1K" },
  { type: "image", src: "/assets/work/oceanus-disney.png", label: "OCEANUS × Disney", sub: "Fashion Collab", accent: "#0891b2", likes: "67.8K", comments: "1.1K", shares: "7.4K" },
  { type: "video", src: "/videos/generated-video-2.mp4", label: "Generated II", sub: "AI Visual", accent: "#d97745", likes: "52.4K", comments: "981", shares: "5.6K" },
  { type: "image", src: "/assets/work/motion-runner.png", label: "Motion Signal", sub: "Visual Study", accent: "#ea580c", likes: "19.5K", comments: "284", shares: "1.8K" },
  { type: "video", src: "/videos/por-3.mp4", label: "Reel III", sub: "Portfolio Reel", accent: "#10b981", likes: "41.0K", comments: "743", shares: "4.2K" },
  { type: "image", src: "/assets/profile/profile-beach.png", label: "Portrait", sub: "AI Artwork", accent: "#0ea5e9", likes: "95.2K", comments: "2.3K", shares: "11.2K" },
] as const;

export function VisualGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<"following" | "foryou">("foryou");
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Sync video playback whenever activeIndex changes
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = muted;
      if (i === activeIndex) {
        v.currentTime = 0;
        v.play().catch(() => undefined);
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [activeIndex, muted]);

  // Detect active slide from scroll position
  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const index = Math.round(el.scrollTop / SLIDE_H);
    setActiveIndex(Math.max(0, Math.min(index, media.length - 1)));
  }, []);

  // Navigate programmatically — directly set scrollTop
  const goTo = useCallback((i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, media.length - 1));
    el.scrollTo({ top: clamped * SLIDE_H, behavior: "smooth" });
  }, []);

  const toggleLike = (index: number) => {
    setLikedMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="visual-gallery" className="border-t border-border py-16">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 md:px-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
          Visual Gallery
        </p>
        <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
          Images &amp; <span className="text-accent-bright">video.</span>
        </h2>
        <p className="mt-3 text-sm text-muted">Interactive TikTok Feed · Scroll or click controls below ↓</p>
      </div>

      {/* Centerpiece Layout focusing solely on the Phone */}
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-10 flex flex-col items-center justify-center">

        {/* Main Phone Device */}
        <div className="w-full max-w-[360px] relative">
          {/* Outer Phone Frame: Premium border + glow shadow */}
          <div
            className="rounded-[3rem] border-[7px] border-[#1c1c1e] bg-black relative"
            style={{ boxShadow: "0 30px 100px -10px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.03)" }}
          >
            {/* Inner Phone Screen */}
            <div className="overflow-hidden rounded-[2.5rem] relative bg-black">
              
              {/* TikTok Header Overlay */}
              <div className="absolute top-0 left-0 right-0 z-20 pt-4 pb-2 px-5 flex items-center justify-between text-white bg-gradient-to-b from-black/70 via-black/30 to-transparent">
                <div className="text-xs font-semibold tracking-wider text-white/80">LIVE</div>
                <div className="flex items-center gap-3 text-xs font-bold">
                  <button 
                    onClick={() => setActiveTab("following")} 
                    className={`transition-opacity ${activeTab === "following" ? "opacity-100 text-white" : "opacity-60 text-white/70"}`}
                  >
                    Following
                  </button>
                  <span className="opacity-30">|</span>
                  <button 
                    onClick={() => setActiveTab("foryou")} 
                    className={`transition-opacity relative ${activeTab === "foryou" ? "opacity-100 text-white" : "opacity-60 text-white/70"}`}
                  >
                    For You
                    {activeTab === "foryou" && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white rounded-full" />
                    )}
                  </button>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pt-1.5 pointer-events-none">
                <div className="h-4.5 w-24 rounded-full bg-black flex items-center justify-between px-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#121212]" />
                  <div className="h-2 w-2 rounded-full bg-[#0a0a0a]" />
                </div>
              </div>

              {/* Scroll Feed Container */}
              <div
                ref={containerRef}
                onScroll={handleScroll}
                style={{
                  height: SLIDE_H,
                  overflowY: "scroll",
                  scrollSnapType: "y mandatory",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {media.map((item, i) => {
                  const isLiked = !!likedMap[i];
                  return (
                    <div
                      key={item.src}
                      style={{
                        height: SLIDE_H,
                        scrollSnapAlign: "start",
                        scrollSnapStop: "always",
                        flexShrink: 0,
                        position: "relative",
                        overflow: "hidden",
                        background: "#000",
                      }}
                    >
                      {/* Media (Image / Video) */}
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-cover"
                          sizes="360px"
                          priority={i === 0}
                        />
                      ) : (
                        <video
                          ref={(el) => { videoRefs.current[i] = el; }}
                          src={item.src}
                          muted={muted}
                          loop
                          playsInline
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}

                      {/* Gradient Protection Layer */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Right Action Bar */}
                      <div className="absolute right-3 bottom-16 z-20 flex flex-col items-center gap-4 text-white">
                        {/* Profile Avatar */}
                        <div className="relative mb-1">
                          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-accent">
                            <Image src="/assets/profile/profile-beach.png" alt="Utsarga" width={40} height={40} className="object-cover" />
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#fe2c55] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                            +
                          </div>
                        </div>

                        {/* Like Button */}
                        <button 
                          onClick={() => toggleLike(i)}
                          className="flex flex-col items-center gap-0.5 group"
                        >
                          <div className="p-2 rounded-full bg-black/20 backdrop-blur-md group-active:scale-125 transition-transform">
                            <svg 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill={isLiked ? "#fe2c55" : "rgba(255,255,255,0.95)"} 
                              stroke={isLiked ? "#fe2c55" : "none"}
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                          </div>
                          <span className="text-[11px] font-semibold text-white drop-shadow-md">
                            {isLiked ? "Liked" : item.likes}
                          </span>
                        </button>

                        {/* Comment Button */}
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="p-2 rounded-full bg-black/20 backdrop-blur-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                            </svg>
                          </div>
                          <span className="text-[11px] font-semibold text-white drop-shadow-md">{item.comments}</span>
                        </div>

                        {/* Share Button */}
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="p-2 rounded-full bg-black/20 backdrop-blur-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                            </svg>
                          </div>
                          <span className="text-[11px] font-semibold text-white drop-shadow-md">{item.shares}</span>
                        </div>

                        {/* Vinyl Disc */}
                        <div className="mt-2 animate-spin" style={{ animationDuration: "4s" }}>
                          <div className="w-8 h-8 rounded-full bg-[#111] border-2 border-gray-700 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-accent" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Details Overlay */}
                      <div className="absolute bottom-4 left-3 right-16 z-20 text-white">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="font-bold text-sm text-white drop-shadow">@utsargabaral</span>
                          <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded text-white font-medium">Author</span>
                        </div>
                        <p className="text-xs text-white/90 font-medium leading-snug drop-shadow line-clamp-2">
                          {item.label} — {item.sub} #AIOperations #GenerativeAI #Portfolio
                        </p>
                        <div className="flex items-center gap-1.5 mt-2 text-[11px] text-white/80">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                          </svg>
                          <span className="truncate">Original Sound - Utsarga Baral</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom TikTok Tab Navigation Bar */}
              <div className="bg-black border-t border-white/10 px-4 py-2 flex items-center justify-between text-white text-[10px] z-20">
                <div className="flex flex-col items-center gap-0.5 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  <span className="font-bold">Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-white/60">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>Friends</span>
                </div>
                {/* TikTok Center Plus Button */}
                <div className="w-9 h-6 bg-gradient-to-r from-[#00f2fe] via-white to-[#fe2c55] rounded-lg p-[1.5px] flex items-center justify-center">
                  <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                    <span className="text-white text-base font-bold leading-none">+</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-white/60">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>Inbox</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-white/60">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Profile</span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="flex justify-center bg-black py-1.5">
                <div className="h-1 w-20 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          {/* Interactive Navigation Controls below phone */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-accent hover:text-accent-bright disabled:opacity-30"
              aria-label="Previous Post"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>

            <span className="rounded-full border border-border px-5 py-2 text-xs font-semibold tabular-nums text-muted bg-card/40">
              {activeIndex + 1} / {media.length}
            </span>

            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-accent hover:text-accent-bright"
              aria-label={muted ? "Unmute Sound" : "Mute Sound"}
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

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === media.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted transition-all hover:border-accent hover:text-accent-bright disabled:opacity-30"
              aria-label="Next Post"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
