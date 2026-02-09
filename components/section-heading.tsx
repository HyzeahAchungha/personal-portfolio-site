"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  subtitle2,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(" mb-12", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl text-center font-bold mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-foreground/70 max-w-4xl text-center mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {subtitle2 && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base text-foreground/70 max-w-4xl italic font-extralight text-start mt-10 mx-auto"
        >
          {subtitle2}
        </motion.p>
      )}
    </div>
  );
}
