"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]",
    secondary: "bg-[var(--color-secondary-800)] text-white hover:bg-[var(--color-secondary-900)] focus:ring-[var(--color-secondary-800)]",
    outline: "border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-600)] hover:text-white focus:ring-[var(--color-primary-500)]",
    ghost: "text-[var(--color-primary-600)] hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-[var(--color-primary-500)]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
