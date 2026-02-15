

# Add Dark Mode Toggle to Mobile Menu

## Overview
Add the sun/moon dark mode toggle button to the mobile hamburger menu so users on mobile can switch themes without needing the desktop navbar.

## Changes

### File: `src/components/Navbar.tsx`

Add a dark mode toggle button below the navigation links inside the mobile overlay's flex column (after the `navLinks.map` block, around line 129).

- Reuse the same `onClick={() => setIsDark(!isDark)}` handler
- Style it consistently with the desktop toggle (brutal-border, brutal-shadow)
- Add the same staggered animation delay as the nav links (using index `navLinks.length` for timing)

```tsx
<button
  onClick={() => setIsDark(!isDark)}
  className="brutal-border brutal-shadow p-3 bg-background transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
  aria-label="Toggle dark mode"
  style={{
    transitionDelay: isOpen ? `${navLinks.length * 75}ms` : "0ms",
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(10px)",
    transitionDuration: "300ms",
  }}
>
  {isDark ? <Sun size={24} /> : <Moon size={24} />}
</button>
```

This gives it the same staggered fade-in animation as the nav links, appearing last in the sequence.

