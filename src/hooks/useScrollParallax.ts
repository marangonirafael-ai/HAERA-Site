import { useEffect, useRef } from 'react';

interface Options {
  /** Pixels of translation at full effect. Negative = moves up as you scroll down. */
  translateY?: number;
  /** Scale delta from start to end (e.g. 0.05 -> goes from 0.95 to 1.05 around center). */
  scale?: number;
  /** Degrees of rotation across the visible window. */
  rotate?: number;
  /** If true, runs even when viewport is small. */
  disabled?: boolean;
}

/**
 * Subtle Apple-like scroll parallax. Applies transform to the ref element
 * based on its position within the viewport. Respects prefers-reduced-motion.
 */
export function useScrollParallax<T extends HTMLElement = HTMLElement>(opts: Options = {}) {
  const { translateY = -30, scale = 0, rotate = 0, disabled = false } = opts;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when element bottom enters viewport, 1 when its top leaves
      const total = vh + rect.height;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / total));
      const t = (progress - 0.5) * 2; // -1 .. 1
      const ty = t * translateY;
      const sc = 1 + t * scale;
      const rt = t * rotate;
      el.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0) scale(${sc.toFixed(4)}) rotate(${rt.toFixed(3)}deg)`;
      el.style.willChange = 'transform';
    };

    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { visible = e.isIntersecting; });
      if (visible) onScroll();
    }, { rootMargin: '100px' });

    io.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [translateY, scale, rotate, disabled]);

  return ref;
}
