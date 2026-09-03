"use client";

import React, { useRef, useEffect, useState, type ElementType } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useGradientTextContext } from './GradientTextContext';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  tag?: keyof React.JSX.IntrinsicElements;
  onLetterAnimationComplete?: () => void;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  style?: React.CSSProperties;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  textAlign = 'left',
  tag = 'p',
  onLetterAnimationComplete,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  style = {}
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const markFontsLoaded = () => setFontsLoaded(true);
    // Timeout de sécurité au cas où le chargement des polices ne serait pas détecté.
    const timer = setTimeout(markFontsLoaded, 100);
    
    if (document.fonts.status === 'loaded') {
      queueMicrotask(markFontsLoaded);
      clearTimeout(timer);
    } else {
      document.fonts.ready.then(() => {
        markFontsLoaded();
        clearTimeout(timer);
      });
    }
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      const el = ref.current;
      const chars = el.querySelectorAll('.split-char');

      gsap.fromTo(
        chars,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
          onComplete: () => {
            onLetterAnimationComplete?.();
          },
          // On nettoie tout après l'animation sauf la visibilité pour que GradientText prenne le relais sur la couleur.
          clearProps: "y,transform" 
        }
      );
    },
    { dependencies: [text, fontsLoaded], scope: ref }
  );

  const gradientCtx = useGradientTextContext();
  const words = text.split(' ');
  const Tag = tag as ElementType;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        ...style,
        textAlign,
        display: 'inline-block',
        position: 'relative',
      }}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap', color: 'inherit' }}>
          {word.split('').map((char, charIdx) =>
            gradientCtx ? (
              <motion.span
                key={charIdx}
                className="split-char"
                style={{
                  display: 'inline-block',
                  lineHeight: 1.4,
                  opacity: fontsLoaded ? 0 : 1,
                  backgroundImage: gradientCtx.gradientImage,
                  backgroundSize: '200% 100%',
                  backgroundPosition: gradientCtx.backgroundPosition,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                {char}
              </motion.span>
            ) : (
              <span
                key={charIdx}
                className="split-char"
                style={{
                  display: 'inline-block',
                  opacity: fontsLoaded ? 0 : 1,
                  color: 'inherit',
                  WebkitTextFillColor: 'inherit',
                }}
              >
                {char}
              </span>
            )
          )}
          {wordIdx < words.length - 1 && (
            <span
              className="split-char"
              style={{ display: 'inline-block', color: 'inherit' }}
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
