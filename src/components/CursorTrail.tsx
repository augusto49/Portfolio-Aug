import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setTrail((prev) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };
      return [...prev.slice(-7), newPoint];
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Don't render on mobile/tablet
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null;
  }

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9998]">
      {/* Ghost Trail with Portfolio Gradient Colors */}
      {trail.map((point, index) => {
        const progress = (index + 1) / trail.length;
        const opacity = progress * 0.5;
        const size = 6 + progress * 10;

        // Portfolio gradient: primary (purple) → accent (magenta)
        // hsl(250 80% 65%) → hsl(280 80% 60%)
        const hue = 250 + progress * 30; // 250 to 280
        const saturation = 80;
        const lightness = 65 - progress * 5; // 65 to 60

        return (
          <motion.div
            key={point.id}
            className="absolute rounded-full"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              background: `radial-gradient(circle, hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity}) 0%, hsla(${
                hue + 15
              }, ${saturation}%, ${lightness - 5}%, ${
                opacity * 0.3
              }) 60%, transparent 100%)`,
              boxShadow: `0 0 ${
                size * 1.5
              }px hsla(${hue}, ${saturation}%, ${lightness}%, ${
                opacity * 0.5
              })`,
            }}
            initial={{ opacity: opacity, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
