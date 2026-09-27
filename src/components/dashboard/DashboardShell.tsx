"use client";

import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

type DashboardShellProps = {
  children: React.ReactNode;
};

/**
 * Shared app shell: ambient orbs, sidebar, header, and the main content
 * container. Every dashboard page renders its content as children so the
 * navigation chrome stays consistent across routes.
 */
export default function DashboardShell({ children }: DashboardShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // While the mobile drawer is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!isSidebarOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSidebarOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSidebarOpen]);

  // Feed the cursor position to the hovered card so its spotlight and
  // glowing edge follow the mouse (see "Card hover" in globals.css).
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(
        ".glass, .hover-lift",
      );
      if (!card) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    // overflow-x-clip (not overflow-hidden) so the sticky header keeps working
    <div className="relative min-h-screen overflow-x-clip">
      {/* Ambient floating color orbs behind the glass */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="animate-floaty absolute -left-24 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="animate-floaty-slow absolute right-10 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="animate-floaty absolute bottom-10 left-1/2 h-80 w-80 rounded-full bg-primary-dark/20 blur-3xl" />
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Overlay shown behind the drawer on tablet/mobile while it's open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <div className="min-w-0 lg:ml-[185px]">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="animate-rise min-w-0 space-y-4 p-3 sm:p-5">
          {children}
        </main>
      </div>
    </div>
  );
}
