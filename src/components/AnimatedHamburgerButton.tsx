import React from "react";
import { MotionConfig, motion } from "motion/react";

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 4px)",
    },
  },
};

interface Props {
  active: boolean;
  setActive: (active: boolean) => void;
  className?: string;
}

export const AnimatedHamburgerButton: React.FC<Props> = ({
  active,
  setActive,
  className = "",
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive(!active)}
        className={`relative flex items-center justify-center rounded-full transition-colors ${className}`}
        aria-label="Toggle menu"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px] w-[16px] bg-[var(--pill-bg)] rounded-[1px]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px] w-[16px] bg-[var(--pill-bg)] rounded-[1px]"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px] w-[8px] bg-[var(--pill-bg)] rounded-[1px]"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 4px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
