"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/ResizableNavbar";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { NAV_ITEMS } from "@/data";

interface NavBar {
    children?: React.ReactNode;
}

export function NavBar({ children }: NavBar) {

  const navItems = NAV_ITEMS;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_ITEMS} />
          <div className="flex items-center gap-4">
            <NavbarButton href="https://calendly.com/guia-va-team/30min" className="bg-primary-light dark:bg-primary text-bg-1-light dark:text-bg-1 hover:bg-primary-light/90 dark:hover:bg-primary/90 font-semibold" >Book a call</NavbarButton>
           <ThemeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.title}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                href="https://calendly.com/guia-va-team/30min"
                variant="primary"
                className="bg-primary-light dark:bg-primary text-bg-1-light dark:text-bg-1 hover:bg-primary-light/90 dark:hover:bg-primary/90 font-semibold"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
            { children }
      {/* Navbar */}
    </div>
  );
}
