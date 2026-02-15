

# Fix Mobile Hamburger Menu Overlay

## Problem
The mobile menu overlay is see-through -- page content (hero text, buttons) is visible behind the navigation links, making them unreadable (as shown in the screenshot). This happens because:
1. The `bg-background` on the overlay doesn't cover the body's grid background pattern
2. The overlay may need explicit background coverage

## Fix

### File: `src/components/Navbar.tsx` (lines 96-101)

**Change 1: Make the overlay fully opaque with explicit background**
- Add a pseudo-element or explicit background that covers the grid pattern by adding the same grid background to the overlay, or simply ensure it's fully opaque
- Move the overlay **outside** the `<nav>` element so it renders independently, OR keep it inside but ensure the background fully covers content

Specifically:
- Add inline `style={{ backgroundColor: 'hsl(var(--background))' }}` to guarantee the background covers the grid pattern from the body
- Or add a `before:` pseudo with the grid pattern so it looks consistent

**Simpler approach:** The `bg-background` class should work. The real issue is likely that the overlay needs the same grid background as the body to appear seamless. Add background-image matching the body's grid pattern to the overlay div.

### Technical Details

In `src/components/Navbar.tsx`, update the mobile overlay div (around line 96-101):

**Before:**
```
className={`md:hidden fixed inset-0 top-[67px] bg-background z-40 border-t-[3px] border-foreground transition-all duration-300 ${...}`}
```

**After:**
```
className={`md:hidden fixed inset-0 top-[67px] bg-background z-40 border-t-[3px] border-foreground transition-all duration-300 ${...}`}
style={{
  backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
  backgroundSize: '40px 40px',
}}
```

Actually, a cleaner approach: just ensure the overlay `z-index` is high enough and that `bg-background` is applied. Since the body has the grid pattern and `bg-background` is the same color, the overlay should be opaque. Let me reconsider -- the issue might be that the overlay is **inside** the `<nav>` element, which clips or doesn't cover the full viewport properly.

**Final approach -- move overlay outside nav or ensure full coverage:**
- Keep the overlay inside nav but remove `top-[67px]` and use `top-0` with padding-top instead, ensuring full screen coverage
- OR simply keep the current structure but add the matching grid background-image directly to the overlay so it blends seamlessly

The cleanest fix:
1. On the overlay div, add the grid background pattern matching the body so it looks seamless and fully covers content behind it
2. Handle dark mode by checking `isDark` for the appropriate grid pattern colors

