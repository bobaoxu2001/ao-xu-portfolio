"use client";

import { useEffect, useRef } from "react";

interface DemoVideoProps {
  src: string;
  poster: string;
  label: string;
}

/**
 * Muted, looping, in-view autoplay for the product demo.
 * - Autoplays only when scrolled into view AND the user prefers motion.
 * - Pauses when scrolled away.
 * - Any manual interaction (click / Enter / Space) hands control to the user.
 * - Native controls stay available either way.
 */
export function DemoVideo({ src, poster, label }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const manualRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !reducedMotion.matches && !manualRef.current) {
          video.play().catch(() => {
            // Autoplay can be blocked; the poster + controls still work.
          });
        } else if (!inView) {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(video);

    const markManual = () => {
      manualRef.current = true;
    };
    video.addEventListener("pointerdown", markManual);
    video.addEventListener("keydown", markManual);

    return () => {
      observer.disconnect();
      video.removeEventListener("pointerdown", markManual);
      video.removeEventListener("keydown", markManual);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={label}
      className="h-full w-full object-cover"
    />
  );
}
