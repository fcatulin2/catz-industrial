"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLockup from "./brand-lockup";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const hero = document.getElementById("top");

    if (!hero || pathname !== "/") {
      return;
    }

    const updateHeaderState = () => {
      const headerHeight =
        document.querySelector(".site-header__inner")?.getBoundingClientRect().height ?? 64;
      setIsPastHero(hero.getBoundingClientRect().bottom <= headerHeight);

      const sectionMarker = headerHeight + 24;
      let currentSection = "";

      for (const link of links) {
        const section = document.getElementById(link.href.slice(1));

        if (section && section.getBoundingClientRect().top <= sectionMarker) {
          currentSection = link.href.slice(1);
        }
      }

      setActiveSection(currentSection);
    };

    let frame = 0;
    const scheduleHeaderUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateHeaderState);
    };

    scheduleHeaderUpdate();
    window.addEventListener("scroll", scheduleHeaderUpdate, { passive: true });
    window.addEventListener("resize", scheduleHeaderUpdate);
    window.addEventListener("hashchange", scheduleHeaderUpdate);
    window.addEventListener("load", scheduleHeaderUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleHeaderUpdate);
      window.removeEventListener("resize", scheduleHeaderUpdate);
      window.removeEventListener("hashchange", scheduleHeaderUpdate);
      window.removeEventListener("load", scheduleHeaderUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMenu();
  };
  const headerIsPastHero = pathname !== "/" || isPastHero;

  return (
    <header className={`site-header ${headerIsPastHero ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" onClick={closeMenu}>
          <BrandLockup preserveTriangle />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={activeSection === link.href.slice(1) ? "is-active" : undefined}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              onClick={() => handleSectionClick(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="button button--header">
          Request a quotation
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={activeSection === link.href.slice(1) ? "is-active" : undefined}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              onClick={() => handleSectionClick(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="mobile-nav__cta" onClick={closeMenu}>
            Request a quotation
          </a>
        </nav>
      </div>
    </header>
  );
}
