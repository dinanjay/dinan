

# Fix Mobile Menu Overlay Transparency

## Problem
The mobile menu overlay is still transparent -- hero content (text, buttons, icons) shows through behind the navigation links, making them unreadable. The `bg-background` class with CSS variable isn't producing a fully opaque overlay.

## Root Cause
The overlay is inside the `<nav>` element which has `z-50`, but the overlay itself only has `z-40`. Since it's a child of the nav, its effective z-index is capped. More critically, the `bg-background` using `hsl(var(--background))` may not be rendering as fully opaque in the fixed positioning context.

## Fix

### File: `src/components/Navbar.tsx`

1. **Move the overlay outside the `<nav>` tag** so it renders independently in the DOM stacking context, OR wrap the component in a Fragment and render the overlay as a sibling.

2. **Set the overlay z-index to `z-50`** (same or higher than the nav) so it properly covers page content.

3. **Add an explicit inline `backgroundColor`** as a fallback to guarantee opacity:
   - Light mode: `hsl(60, 11%, 95%)`  
   - Dark mode: `hsl(0, 0%, 7%)`

### Concrete Changes

**Restructure the component** to use a React Fragment (`<>...</>`) so the overlay renders outside `<nav>`:

```text
<>
  <nav className="fixed top-0 ... z-50 ...">
    {/* Logo, desktop links, mobile hamburger button */}
  </nav>

  {/* Mobile Overlay - now a sibling, not a child */}
  <div className="md:hidden fixed inset-0 top-[67px] bg-background z-50 ...">
    {/* nav links */}
  </div>
</>
```

This ensures the overlay:
- Is not constrained by the nav's stacking context
- Sits at the same z-level as the nav bar
- Fully covers all page content below the navbar

The grid background pattern and staggered link animations remain unchanged.

