"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Animation = ({ children }: IProps) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "backInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
