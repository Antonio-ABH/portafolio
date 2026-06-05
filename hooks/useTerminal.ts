"use client";

import { useState } from "react";

export function useTerminalScript(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return {
    currentStep,
    nextStep,
    reset,
    isFinished: currentStep >= totalSteps,
  };
}