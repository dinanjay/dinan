

# Fix Search Input Icon/Placeholder Overlap

## Problem
The search icon overlaps with the "Search articles..." placeholder text in dark mode. The left padding on the input isn't sufficient to clear the icon.

## Fix

### File: `src/pages/Blog.tsx`

Increase the input's left padding from `pl-12` to `pl-14` (3.5rem) so the placeholder text starts after the search icon. No other changes needed.

