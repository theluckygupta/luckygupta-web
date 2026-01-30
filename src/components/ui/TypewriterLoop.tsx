'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  phrases: string[];
  typingSpeed?: number;
  holdDuration?: number;
  className?: string;
};

export function TypewriterLoop({
  phrases,
  typingSpeed = 80,
  holdDuration = 2500,
  className
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrases[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + phrases[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
            const hold = setTimeout(() => {
             setText('');
             setCharIndex(0);
                setIndex((prev) => (prev + 1) % phrases.length);
            }, holdDuration);

        return () => clearTimeout(hold);
    }

  }, [charIndex, index, phrases, typingSpeed, holdDuration]);

  return (
    <div className={cn('flex items-center space-x-1 my-6', className)}>
      <div
        className="lg:text:3xl text-xl sm:text-3xl md:text-5xl xl:text-6xl font-bold"
        style={{ whiteSpace: 'nowrap' }}
      >
        <span
         className={
         index === 0
          ? 'text-blue-500 dark:text-blue-500'
            : 'text-black dark:text-white'
         }
        >
        {text}
        </span>


      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="block rounded-sm w-[4px] h-6 md:h-10 xl:h-12 bg-blue-500"
      />
    </div>
  );
}
