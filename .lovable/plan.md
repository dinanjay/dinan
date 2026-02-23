

# Add Pagination to Blog Page

## What Changes
Add pagination to the blog listing page, showing 10 posts per page. The pagination controls will use the existing neobrutalist design system (`brutal-border`, `brutal-btn`, font-mono) rather than the shadcn pagination component, to stay consistent with the rest of the site.

## Modified File

### `src/pages/Blog.tsx`

1. Add a `currentPage` state (default: 1), reset to 1 whenever search or tag filter changes.
2. After filtering posts, slice the array: `filtered.slice((currentPage - 1) * 10, currentPage * 10)`.
3. Calculate `totalPages = Math.ceil(filtered.length / 10)`.
4. Render pagination controls below the post list (only when `totalPages > 1`):
   - "Previous" and "Next" buttons using `brutal-btn` styling, disabled at boundaries.
   - Numbered page buttons using `brutal-border` with `bg-primary text-primary-foreground` for the active page.
   - All text in `font-mono font-bold text-sm` to match existing tag/filter buttons.
5. Smooth scroll to top of post list when changing pages.

## Technical Details

- No new files or dependencies needed.
- Posts per page constant: `const POSTS_PER_PAGE = 10`.
- Reset `currentPage` to 1 inside the `search` and `activeTag` change handlers to avoid showing an empty page after filtering.
- Pagination buttons follow the same pattern as the tag filter buttons (e.g., `brutal-border px-3 py-1 font-mono text-sm font-bold`).
- The "Previous"/"Next" buttons use the `brutal-btn` class with `opacity-50 pointer-events-none` when disabled.

