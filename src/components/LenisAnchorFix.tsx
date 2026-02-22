import { useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * When Lenis is active, normal anchor links (<a href="#id">) don't scroll correctly.
 * This component intercepts hash link clicks and uses Lenis.scrollTo() so in-page
 * links (e.g. #courses, #about, #contact) work properly.
 */
export function LenisAnchorFix() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor || !anchor.hash) return;
      const id = anchor.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: 0, duration: 1.2 });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [lenis]);

  return null;
}
