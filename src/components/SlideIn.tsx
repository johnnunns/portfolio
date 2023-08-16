import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Box, styled } from '@mui/material';

interface SlideInProps {
  children?: React.ReactNode;
  direction?: string;
  index: number;
}

const SlideAnimation = styled(motion.div)(({ theme }) => ({
  zIndex: 20,
}));

const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'rtl',
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  const duration = direction === 'rtl' ? 1 / (index + 1) : 0.25 * (index + 1);

  return (
    <Box ref={ref}>
      <SlideAnimation
        variants={{
          hidden: { x: direction === 'rtl' ? -500 : 500, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration, delay: 0.35 }}
        initial="hidden"
        animate={slideControls}
        style={{}}
      >
        {children}
      </SlideAnimation>
    </Box>
  );
};

export default SlideIn;
