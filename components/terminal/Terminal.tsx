"use client";

import { useEffect } from "react";
import Typewriter from "./Typewriter";
import { useTerminalScript } from "@/hooks/useTerminal";
import type { Step } from "@/types/terminalTypes";

const SCRIPT: Step[] = [
  {
    type: "command",
    text: "jose@portfolio: ~$ whoami",
    color: "text-emerald-500",
  },

  {
    type: "output",
    text: "José Antonio Cervantes Villarreal",
    color: "text-blue-400",
  },

  {
    type: "output",
    text: "FullStack Developer",
    color: "text-blue-300",
  },

  {
    type: "output",
    text: "Experience: 5+ years",
    color: "text-blue-300",
  },

  {
    type: "output",
    text: "Location: México",
    color: "text-blue-300",
  },

  {
    type: "output",
    text: "Focus: Web Development",
    color: "text-blue-300",
  },

  {
    type: "output",
    text: "Passion: Building Secure and AI-powered products",
    color: "text-blue-300",
  },

  {
    type: "output",
    text: "Current Goal: Become AI Engineer",
    color: "text-blue-300",
  },

  {
    type: "prompt",
    text: "jose@portfolio: ~$",
    color: "text-emerald-500",
  },
];

export default function Terminal() {
  const {
    currentStep,
    nextStep,
    reset,
    isFinished,
  } = useTerminalScript(SCRIPT.length);

  useEffect(() => {
    if (!isFinished) return;

    const timeout = setTimeout(() => {
      reset();
    }, 20000);

    return () => clearTimeout(timeout);
  }, [isFinished, reset]);

  return (
    <div className="flex flex-col font-mono">
      {SCRIPT.slice(0, currentStep).map((line, index) => (
        <p key={index} className={line.color}>
          {line.text}
        </p>
      ))}

      {!isFinished && (
        <Typewriter
            key={currentStep}
            text={SCRIPT[currentStep].text}
            className={SCRIPT[currentStep].color}
            onComplete={() => {
                setTimeout(() => {
                    nextStep();
                    }, 400);
                 }}
            />
        )}
    </div>
  );
}