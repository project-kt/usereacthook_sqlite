"use client";

import { RefObject, useEffect } from "react";

/**
 * A custom React hook that triggers a callback function when the mouse leaves the specified HTML element.
 *
 * This hook is designed to handle the 'mouseleave' event for a given element, which is useful for UI interactions
 * where an action needs to be performed once the user's mouse leaves a particular area of the interface.
 *
 * @param {RefObject<T>} ref - A React ref object pointing to the target HTML element.
 * @param {() => void} fn - A callback function to be executed when the mouse leaves the element.
 *
 * The hook uses the `useEffect` to attach and detach the event listener to the element. The event listener
 * is only attached if the element exists (i.e., if `ref.current` is not null).
 *
 * The dependency array of the `useEffect` includes only the callback function `fn` to ensure that the event listener
 * is updated if the callback changes. The `ref` object is not included to avoid unnecessary re-attachments of the
 * event listener due to changes in the ref object itself.
 *
 * Usage:
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * useHoverOutside(ref, () => {
 *   console.log('Mouse has left the specified element');
 * });
 * ```
 *
 * Note: Ensure that the element associated with the ref is mounted in the DOM before using this hook to avoid
 * potential issues with null references.
 */

const useHoverOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  fn: () => void,
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      const handleMouseLeave = (event: MouseEvent) => fn();
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [fn]); // Removed ref from dependency array to avoid unnecessary re-attachments
};

export default useHoverOutside;
