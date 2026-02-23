

# Add Back-to-Top Button

## What Changes
Add a floating "Back to Top" button that appears when the user scrolls down the page and smoothly scrolls back to the top when clicked. It will follow the existing neobrutalist design system.

## New File

### `src/components/BackToTop.tsx`

A small component that:
- Tracks scroll position with a `useEffect` listener
- Shows the button only when `scrollY > 400px`
- Uses `window.scrollTo({ top: 0, behavior: 'smooth' })` on click
- Styled with `brutal-border brutal-shadow` classes to match the site's design
- Uses the `ArrowUp` icon from `lucide-react`
- Positioned `fixed bottom-6 right-6 z-40`
- Animates in/out with a simple opacity/translate transition

## Modified File

### `src/App.tsx`

Import and render `<BackToTop />` alongside the other global components (after `<Footer />`).

