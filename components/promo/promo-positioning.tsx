"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react";
import { poppins, inter } from "@/lib/font";

export function PromoPositioning() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handlePlayAndUnmute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    videoRef.current.play().catch(() => {});
    setIsMuted(false);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    if (!next) {
      videoRef.current.volume = 1;
    }
    setIsMuted(next);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={`${inter.className} section-shell dark-panel relative w-full overflow-hidden py-20 px-5 md:py-28 md:px-8`}>
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600 blur-[130px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT COLUMN: STATEMENT & HIGH-CONVERTING VALUE */}
          <div className="lg:col-span-7 flex flex-col gap-6">
           

            <h2 className={`${poppins.className} text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.14]`}>
              Let&apos;s build your {" "} 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                websites
              </span>{" "}
              for you.
            </h2>

            

           

            {/* ACTION CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/promo/apply"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Get My Online Store</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: BUSINESS LOGIC CREATIVE VIDEO */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
              {/* Vibrant ambient glow behind the phone */}
              <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-tr from-blue-600/30 via-indigo-600/30 to-purple-600/30 blur-2xl opacity-75 pointer-events-none" />

              {/* Smartphone Frame */}
              <div className="relative rounded-[36px] sm:rounded-[42px] border-[6px] sm:border-[8px] border-[#1e293b] bg-black shadow-2xl overflow-hidden aspect-[9/16]">
                {/* Creative Video */}
                <video
                  ref={videoRef}
                  loop
                  muted={isMuted}
                  playsInline
                  preload="none"
                  poster="/promo/creative-poster.jpg"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source
                    src="/promo/business-logic-creative.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Simulated Phone Top Speaker */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-3.5 w-24 rounded-full bg-black/80 backdrop-blur-md pointer-events-none z-20" />

                {/* BIG CENTER PLAY & UNMUTE BUTTON OVERLAY */}
                {(!isPlaying || isMuted) && (
                  <button
                    type="button"
                    onClick={handlePlayAndUnmute}
                    className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/35 hover:bg-black/45 backdrop-blur-[2px] transition-all group/center cursor-pointer"
                    aria-label="Play and unmute video"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -inset-3 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
                      <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/70 border-2 border-white/40 transition-transform duration-200 group-hover/center:scale-110 active:scale-95">
                        <Play className="h-9 w-9 sm:h-11 sm:w-11 fill-current ml-1" />
                      </div>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-black/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-lg group-hover/center:bg-black/95 transition-colors">
                      <Volume2 className="h-3.5 w-3.5 text-blue-400" />
                      <span>{isMuted ? "Tap To Play With Sound" : "Resume Video"}</span>
                    </span>
                  </button>
                )}

                {/* Video Overlay Action Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-40 pointer-events-none">
                  {/* Play / Pause Toggle */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white px-3 py-1.5 text-xs font-semibold backdrop-blur-md border border-white/10 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-3.5 w-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  {/* Sound Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 text-xs font-bold backdrop-blur-md shadow-lg shadow-blue-600/40 border border-blue-400/30 transition-all hover:scale-105 active:scale-95"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="h-3.5 w-3.5" />
                        <span>Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>Sound On</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
