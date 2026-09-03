"use client";
import { createContext, useContext } from 'react';
import type { MotionValue } from 'framer-motion';

export interface GradientContextValue {
  gradientImage: string;
  gradientSize: string;
  backgroundPosition: MotionValue<string>;
}

export const GradientTextContext = createContext<GradientContextValue | null>(null);
export const useGradientTextContext = () => useContext(GradientTextContext);
