export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const titleAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
