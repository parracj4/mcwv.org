"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  const toggleSub = (href: string) => {
    setOpenSub(openSub === href ? null : href);
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <Link
          href="/"
          className="site-brand"
          aria-label={`${siteConfig.name} - Home`}
        >
          <span className="site-brand-name">{siteConfig.name}</span>
        </Link>
        <button
          className="nav-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setOpenSub(null);
          }}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
        <nav
          id="main-navigation"
          className={`main-nav${menuOpen ? " open" : ""}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const hasChildren = "children" in item && item.children;
            const isOpen = openSub === item.href;

            return (
              <div key={item.href} className="nav-item">
                {hasChildren ? (
                  <div className="nav-item-row">
                    <Link
                      href={item.href}
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                    <button
                      className={`nav-sub-toggle${isOpen ? " open" : ""}`}
                      onClick={() => toggleSub(item.href)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
                    >
                      <span className="nav-chevron" />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
                {hasChildren && (
                  <div
                    className={`nav-dropdown${isOpen ? " mobile-open" : ""}`}
                  >
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-link"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
