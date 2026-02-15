

# Make Dynamic Navbar (Hide on Scroll Down, Show on Scroll Up)

## Summary
Add scroll-aware behavior to the navbar so it hides when the user scrolls down and reappears when scrolling up. This is a common "smart navbar" pattern that gives more screen real estate while keeping navigation easily accessible.

## Behavior
- **Scroll down**: Navbar slides up and hides
- **Scroll up**: Navbar slides back into view
- **At top of page**: Navbar always visible
- **Mobile menu open**: Navbar stays visible (don't hide while menu is open)

## Technical Details

### File: `src/components/Navbar.tsx`
- Add two state variables: `lastScrollY` (tracks previous scroll position) and `isVisible` (controls navbar visibility)
- Add a `useEffect` with a scroll event listener that compares `window.scrollY` to `lastScrollY`:
  - If scrolling down and past a threshold (~50px), set `isVisible = false`
  - If scrolling up, set `isVisible = true`
  - If at the very top (scrollY < 10), always show
  - Skip hiding if mobile menu is open
- Apply a CSS transition on the `<nav>` element using `translate-y`: `-translate-y-full` when hidden, `translate-y-0` when visible
- Add `transition-transform duration-300` for smooth animation
- Optionally add a subtle background blur/opacity change when navbar is floating (not at top)

### No new files or dependencies needed

