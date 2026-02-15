

# Make Latest Posts Cards Full Width on Large Screens

## Problem
The blog post cards in the "Latest Posts" section are constrained to `max-w-4xl` (896px), leaving empty space on the right side on larger screens. This creates a visual inconsistency compared to other full-width sections like Featured Projects.

## Fix

### File: `src/pages/Index.tsx`
Remove the `max-w-4xl` class from the blog posts container (the `div` with `space-y-6 max-w-4xl pb-2 pr-2`), so the cards stretch to the full container width on all screen sizes.

**Before:** `className="space-y-6 max-w-4xl pb-2 pr-2"`
**After:** `className="space-y-6 pb-2 pr-2"`

This single class removal aligns the blog section with the rest of the page layout.

