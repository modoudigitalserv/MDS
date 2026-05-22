import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  containerClass,
  id,
  bg = "white",
}) {
  const backgrounds = {
    white: "bg-white dark:bg-[#0f172a]",
    gray: "bg-slate-50 dark:bg-[#0B1120]",
    primary: "bg-[var(--color-primary-600)] text-white",
    dark: "bg-[#0f172a] text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", backgrounds[bg], className)}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </section>
  );
}
