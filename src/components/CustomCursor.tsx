import { useEffect, useRef } from "react";

// Easily customize size, color, speed, opacity, and hover effects
const CONFIG = {
  // Main inner cursor (snappy, outline)
  dotSize: 10,                 // px (8-12px)
  dotBorderWidth: 2,           // px (thin 2px outline)
  dotColor: "#2563eb",         // royal blue outline
  dotGlow: "0 0 8px rgba(37, 99, 235, 0.5)", // soft blue glow

  // Follower ring
  followerSize: 28,            // px (24-32px)
  followerBorderWidth: 1.5,    // px
  followerColor: "#3b82f6",    // bright blue ring
  followerOpacityDefault: 0.4, // visible opacity
  easing: 0.15,                // smooth interpolation factor

  // Hover state modifications
  hoverScale: 1.8,             // scale factor
  hoverOpacity: 0.9,           // 90% opacity
  hoverGlow: "0 0 15px rgba(59, 130, 246, 0.8)", // blue glow

  // Transitions
  transitionDuration: "200ms", // 200ms ease-out transition
  transitionEasing: "cubic-bezier(0.25, 1, 0.5, 1)", // soft spring-like motion
};

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const rippleContainerRef = useRef<HTMLDivElement>(null);

  // Positions tracking (using refs for 60fps performance without state re-renders)
  const mouse = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });

  const hasMoved = useRef(false);

  useEffect(() => {
    // 1. Performance and Accessibility checks
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 1024; // Disable on tablet/mobile screens

    if (isTouch || prefersReducedMotion || isMobile) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    // Hide default system cursor and enable layout styling
    document.documentElement.classList.add("has-custom-cursor");

    // Initialize positions off-screen
    mouse.current = { x: -100, y: -100 };
    dot.current = { x: -100, y: -100 };
    follower.current = { x: -100, y: -100 };

    // 2. Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Handle smooth fade-in on first movement
      if (!hasMoved.current) {
        hasMoved.current = true;
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
          containerRef.current.style.transition = `opacity 400ms ${CONFIG.transitionEasing}`;
        }
      }

      // Hover target classification
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest(
          "button, a, [role='button'], [role='tab'], input, textarea, select, " +
          "img, .aspect-video, .cursor-pointer, .nav-link, .nav-item, .menu-item, " +
          "[data-hover-target], .group"
        );

        if (isInteractive) {
          containerRef.current?.classList.add("is-hovered");
        } else {
          containerRef.current?.classList.remove("is-hovered");
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest(
          "button, a, [role='button'], [role='tab'], input, textarea, select, " +
          "img, .aspect-video, .cursor-pointer, .nav-link, .nav-item, .menu-item, " +
          "[data-hover-target], .group"
        );

        if (isInteractive) {
          containerRef.current?.classList.add("is-hovered");
        } else {
          containerRef.current?.classList.remove("is-hovered");
        }
      }
    };

    const handleMouseDown = () => {
      containerRef.current?.classList.add("is-clicking");

      // Click ripple animation
      if (rippleContainerRef.current) {
        const ripple = document.createElement("div");
        ripple.className = "custom-cursor-ripple";
        ripple.style.left = `${mouse.current.x}px`;
        ripple.style.top = `${mouse.current.y}px`;
        rippleContainerRef.current.appendChild(ripple);

        // Force reflow and trigger transition
        void ripple.offsetWidth;
        ripple.style.transform = "translate3d(-50%, -50%, 0) scale(4.5)";
        ripple.style.opacity = "0";

        // Clean up ripple element after transition
        setTimeout(() => {
          ripple.remove();
        }, 300);
      }
    };

    const handleMouseUp = () => {
      containerRef.current?.classList.remove("is-clicking");
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
      }
    };

    const handleMouseEnter = () => {
      if (containerRef.current && hasMoved.current) {
        containerRef.current.style.opacity = "1";
      }
    };

    // 3. Register Event Listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    // 4. High-performance requestAnimationFrame render loop
    let animFrameId: number;

    const renderLoop = () => {
      animFrameId = requestAnimationFrame(renderLoop);

      // Smooth Snappy Dot tracking
      dot.current.x += (mouse.current.x - dot.current.x) * 0.45;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.45;

      // Elastic Follower tracking with smooth trailing interpolation
      follower.current.x += (mouse.current.x - follower.current.x) * CONFIG.easing;
      follower.current.y += (mouse.current.y - follower.current.y) * CONFIG.easing;

      // Render positions using translate3d for GPU acceleration
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
    };

    animFrameId = requestAnimationFrame(renderLoop);

    // Clean up
    return () => {
      cancelAnimationFrame(animFrameId);
      document.documentElement.classList.remove("has-custom-cursor");

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* CSS Styles block to inject performance configurations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          html.has-custom-cursor,
          html.has-custom-cursor * {
            cursor: none !important;
          }
        }
        
        .custom-cursor-element {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 999999;
          will-change: transform, opacity, width, height, background-color, border-color, box-shadow;
          transform: translate3d(-100px, -100px, 0);
        }

        .custom-cursor-dot {
          width: ${CONFIG.dotSize}px;
          height: ${CONFIG.dotSize}px;
          border: ${CONFIG.dotBorderWidth}px solid ${CONFIG.dotColor};
          border-radius: 50%;
          background-color: transparent;
          box-shadow: ${CONFIG.dotGlow};
          transition: transform ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      background-color ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      opacity ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      box-shadow ${CONFIG.transitionDuration} ${CONFIG.transitionEasing};
        }

        .custom-cursor-follower {
          width: ${CONFIG.followerSize}px;
          height: ${CONFIG.followerSize}px;
          border: ${CONFIG.followerBorderWidth}px solid ${CONFIG.followerColor};
          border-radius: 50%;
          background-color: transparent;
          opacity: ${CONFIG.followerOpacityDefault};
          transition: transform ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      background-color ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      border-color ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      opacity ${CONFIG.transitionDuration} ${CONFIG.transitionEasing},
                      box-shadow ${CONFIG.transitionDuration} ${CONFIG.transitionEasing};
        }

        /* Hover states styles */
        .custom-cursor-container.is-hovered .custom-cursor-dot {
          transform: scale(0);
          opacity: 0;
        }

        .custom-cursor-container.is-hovered .custom-cursor-follower {
          transform: scale(${CONFIG.hoverScale});
          background-color: ${CONFIG.followerColor};
          border-color: transparent;
          opacity: ${CONFIG.hoverOpacity};
          box-shadow: ${CONFIG.hoverGlow};
        }

        /* Active/Click styles (Scale 0.9 compression) */
        .custom-cursor-container.is-clicking .custom-cursor-follower {
          transform: scale(calc(${CONFIG.hoverScale} * 0.9));
        }
        .custom-cursor-container:not(.is-hovered).is-clicking .custom-cursor-follower {
          transform: scale(0.9);
        }

        /* Subtle Ripple expanding outward and fading in 300ms */
        .custom-cursor-ripple {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          border: 1.5px solid rgba(59, 130, 246, 0.85);
          background-color: transparent;
          z-index: 999998;
          will-change: transform, opacity;
          transform: translate3d(-50%, -50%, 0) scale(0.15);
          opacity: 1;
          transition: transform 300ms cubic-bezier(0.1, 0.8, 0.3, 1),
                      opacity 300ms cubic-bezier(0.1, 0.8, 0.3, 1);
        }
      ` }} />

      <div ref={containerRef} className="custom-cursor-container pointer-events-none hidden lg:block" style={{ opacity: 0 }}>
        {/* Precision Core Inner Dot */}
        <div
          ref={dotRef}
          className="custom-cursor-element custom-cursor-dot"
        />

        {/* Primary outer elastic follower ring */}
        <div
          ref={followerRef}
          className="custom-cursor-element custom-cursor-follower"
        />

        {/* Ripple Container */}
        <div ref={rippleContainerRef} className="fixed inset-0 pointer-events-none z-[999997]" />
      </div>
    </>
  );
}

