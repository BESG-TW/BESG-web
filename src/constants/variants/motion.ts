export const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export const buttonHover = {
  hover: {
    color: '#000000',
    backgroundColor: '#ffffff',
    transition: {
      duration: 0.2,
    },
  },
};
