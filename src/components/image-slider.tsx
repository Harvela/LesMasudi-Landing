'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

export const InfiniteMovingImages = ({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  const [start, setStart] = useState(false);

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '200s');
      }
    }
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 w-max flex-nowrap gap-[1px] bg-white',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            className=" relative flex w-[90vw] max-w-full shrink-0 flex-row md:w-[60vw]"
            style={
              {
                // background:
                //   'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
              }
            }
            key={idx}
          >
            <img
              src={item}
              alt="pupils"
              className="h-[40vh] w-[100vw] object-cover md:h-[95vh] md:w-full"
            />{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
