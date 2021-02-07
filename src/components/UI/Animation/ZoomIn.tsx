import React, { FC, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// types
import { IZoomInProps } from './types';

export const ZoomIn: FC<IZoomInProps> = ({ children, triggerOnce = true }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = useMemo(() => ({
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  }), []);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
