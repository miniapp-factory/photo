import { useEffect, useRef } from "react";

interface PhotoGlitchProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

/**
 * A very simple 35mm‑style glitch component.
 * It draws the image onto a canvas, then applies a random
 * horizontal offset to a few scanlines to create a glitch effect.
 */
export function PhotoGlitch({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  className = "",
}: PhotoGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Apply a simple glitch: shift random scanlines
      const glitchCount = 10;
      for (let i = 0; i < glitchCount; i++) {
        const y = Math.floor(Math.random() * canvas.height);
        const widthSlice = Math.floor(Math.random() * canvas.width / 2);
        const offset = Math.floor(Math.random() * 20 - 10);
        const imageData = ctx.getImageData(
          0,
          y,
          widthSlice,
          1
        );
        ctx.putImageData(imageData, offset, y);
      }
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width, height }}
      aria-label={alt}
    />
  );
}
