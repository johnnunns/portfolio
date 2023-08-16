import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Box, styled } from '@mui/material';

interface RevealProps {
  children?: React.ReactNode;
  width?: 'fit-content' | '100%';
  center?: boolean;
}

const SlideAnimation = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  bottom: 4,
  left: 0,
  right: 0,
  background: theme.palette.primary.main,
  zIndex: 20,
}));

const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  center,
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

  return (
    <Box
      ref={ref}
      position="relative"
      overflow="hidden"
      width={width}
      margin={center ? '0 auto' : '0'}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
      <SlideAnimation
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        initial="hidden"
        animate={slideControls}
        style={{}}
      />
    </Box>
  );
};

export default Reveal;
