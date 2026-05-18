import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    style={{ willChange: "transform, opacity" }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description?: string;
}) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary mb-4">
        {badge}
      </span>
    )}
    <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);
