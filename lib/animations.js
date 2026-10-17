/**
 * Premium Animation System Tokens & Variants
 * Built for high-performance 60fps animations with full accessibility support.
 */

// Premium easing curves
export const EASINGS = {
  smoothOut: [0.16, 1, 0.3, 1],       // Apple / Stripe style smooth deceleration
  gentleSpring: { type: 'spring', stiffness: 260, damping: 24 },
  snappySpring: { type: 'spring', stiffness: 380, damping: 28 },
  easeOut: [0.215, 0.61, 0.355, 1],
}

// Animation 1: Hero Entrance Sequence Tokens
export const heroEntrance = {
  portrait: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: EASINGS.smoothOut },
  },
  badge: {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.15, ease: EASINGS.smoothOut },
  },
  subtitle: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: 0.25, ease: EASINGS.smoothOut },
  },
  name: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.35, ease: EASINGS.smoothOut },
  },
  description: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: 0.48, ease: EASINGS.smoothOut },
  },
  cta: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.65, ease: EASINGS.smoothOut },
  },
}

// Animation 2: Scroll-Triggered Typography Reveal Tokens
export const typographyReveal = {
  tag: {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.45, ease: EASINGS.smoothOut },
  },
  heading: {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, delay: 0.08, ease: EASINGS.smoothOut },
  },
  subtext: {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, delay: 0.16, ease: EASINGS.smoothOut },
  },
}

// Animation 3: Interactive Card Hover & Reveal Tokens
export const cardMotion = {
  reveal: (index = 0, delayOffset = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.5,
      delay: delayOffset + index * 0.08,
      ease: EASINGS.smoothOut,
    },
  }),
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  tap: {
    scale: 0.985,
    transition: { duration: 0.15 },
  },
}

/**
 * Safely strips animations when user prefers reduced motion
 */
export const safeMotion = (props, shouldReduceMotion) => {
  if (shouldReduceMotion) {
    return {
      initial: false,
      animate: undefined,
      whileInView: undefined,
      whileHover: undefined,
      whileTap: undefined,
      transition: { duration: 0 },
    }
  }
  return props
}
