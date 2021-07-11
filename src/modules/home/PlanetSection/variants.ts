export const planetVariant = {
  hover: {
    scale: 1.07,
    cursor: 'pointer',
    transition: {
      duration: 0.7,
      yoyo: Infinity,
    },
  },
  initial: {
    opacity: 1,
    x: 0,
  },
  rotateLeft: {
    rotate: -360,
    cursor: 'pointer',
    transition: { duration: 32, loop: Infinity, ease: 'linear' },
  },
  rotateRight: {
    rotate: 360,
    cursor: 'pointer',
    transition: { duration: 20, loop: Infinity, ease: 'linear' },
  },
};
