
# Fix Overflowing Map and Blog Cards on Landing Page

## Problem
The Journey Map and Latest Blog Posts sections overflow horizontally beyond their containers. The `brutal-shadow` (4px offset) and hover shadow (8px offset) on cards, combined with the 3px borders, extend beyond the parent containers, causing horizontal scrollbar or visual overflow.

## Fix

### 1. Journey section (`src/pages/Index.tsx`, line 96)
Add `overflow-hidden` to the Journey section's container so the map and timeline grid don't bleed out.

### 2. Blog posts section (`src/pages/Index.tsx`, line 163)
Add padding to the blog posts wrapper (`space-y-6 max-w-4xl`) to accommodate the brutal-shadow offsets on hover (8px). This prevents the shadow from being clipped or overflowing.

### 3. Global overflow fix (`src/index.css`)
Add `overflow-x: hidden` on the `body` or the `main` element to prevent any horizontal scrollbar from appearing site-wide due to shadows/borders.

## Technical Details

### File: `src/pages/Index.tsx`
- **Line 96**: Add `overflow-hidden` to the Journey section's inner `div`
- **Line 163**: Add `pb-2 pr-2` (or similar small padding) to the blog posts container to give room for shadows

### File: `src/index.css`
- Add `overflow-x: hidden` to the `body` rule to prevent horizontal scroll caused by shadow offsets across all sections
