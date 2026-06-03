"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-bg-1-light/80 dark:bg-bg-1/40 backdrop-blur-md border-b border-gray-1-light dark:border-gray-1">
      {children}
    </div>
  );
}

interface NavBodyProps {
  children: React.ReactNode;
}

export function NavBody({ children }: NavBodyProps) {
  return (
    <div className="hidden lg:flex items-center justify-between px-[4vw] py-[1.5vw] mx-auto">
      {children}
    </div>
  );
}

interface NavItemsProps {
  items: Array<{ title: string; link: string }>;
}

export function NavItems({ items }: NavItemsProps) {
  return (
    <div className="flex items-center gap-[2vw]">
      {items.map((item, idx) => (
        <a
          key={`nav-item-${idx}`}
          href={item.link}
          className="text-[0.9vw] lg:text-[1vw] text-text-1-light dark:text-text-1 hover:text-primary-light dark:hover:text-primary transition-colors"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export function NavbarLogo() {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push("/")}
      className="cursor-pointer flex items-center gap-2"
    >
      <Image
        src="/guia-logo.png"
        alt="Guia Logo"
        width={200}
        height={50}
        className="h-[3vw] lg:h-[2.5vw] md:h-[7vw] w-auto"
      />
    </div>
  );
}

interface NavbarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: string;
  href?: string;
}

export function NavbarButton({ children, onClick, className, variant, href }: NavbarButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "px-[1.5vw] py-[0.6vw] md:px-[4vw] md:py-[2vw] rounded-[0.4vw] md:rounded-[1vw] text-[0.85vw] md:text-[3vw] font-medium transition-all",
        className
      )}
    >
      {children}
    </button>
  );
}

interface MobileNavProps {
  children: React.ReactNode;
}

export function MobileNav({ children }: MobileNavProps) {
  return (
    <div className="lg:hidden">
      {children}
    </div>
  );
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
}

export function MobileNavHeader({ children }: MobileNavHeaderProps) {
  return (
    <div className="flex items-center justify-between px-[4vw] py-[3vw]">
      {children}
    </div>
  );
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileNavToggle({ isOpen, onClick }: MobileNavToggleProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-text-1-light dark:text-text-1"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavMenu({ children, isOpen, onClose }: MobileNavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-bg-1-light dark:bg-bg-1 border-t border-gray-1-light dark:border-gray-1"
        >
          <div className="flex flex-col gap-4 px-[4vw] py-[4vw]">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
