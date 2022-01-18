export const fadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
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

export const navAnimation = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 100 },
      duration: 0.8,
    },
  },
};
