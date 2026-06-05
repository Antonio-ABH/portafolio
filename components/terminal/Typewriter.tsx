"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
};

export default function Typewriter({
  text,
  className,
  speed = 100,
  onComplete,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {
      i++;

      setDisplayed(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}