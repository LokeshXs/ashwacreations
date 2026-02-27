"use client";
import React from "react";
import { motion } from "motion/react";

export default function TextRevealAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ width: "100%" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileInView={{ width: 0 }}
        viewport={{ once: true }}
        className=" absolute top-0 inset-x-0 h-full bg-secondary  "
      />
    </div>
  );
}
