export const headlineVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const benefitsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export const benefitsCardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
