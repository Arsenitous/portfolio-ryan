import { useEffect } from 'react';

/**
 * useScrollFade
 * Attaches an IntersectionObserver to every element with the `.fade-up` class.
 * When an element enters the viewport, it receives `.fade-up--visible` and is
 * then un-observed so the animation fires only once per page load.
 */
export function useScrollFade() {
  useEffect(() => {
    const targets = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up--visible');
            observer.unobserve(entry.target); // fire only once
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
