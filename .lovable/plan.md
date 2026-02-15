

# Add Latest Blog Posts and Featured Projects Sections to Homepage

## Summary
Add two new sections to the homepage below the Journey Timeline: a "Featured Projects" grid showing the 3 latest projects, and a "Latest Posts" section showing the 3 most recent blog posts. Both sections follow the existing Neo-Brutalist styling and include "View All" links to their respective pages.

## Layout Order (top to bottom)
1. Hero (existing)
2. Tech Stack Marquee (existing)
3. Journey Timeline (existing)
4. **Featured Projects (new)** -- 3-column grid on desktop
5. **Latest Blog Posts (new)** -- stacked card list

## Design Details

### Featured Projects Section
- Section header: "FEATURED PROJECTS" badge in the same brutal style as "MY JOURNEY"
- Display the first 3 projects from the existing `projects` data array
- Each card reuses the same card layout from the Projects page (thumbnail placeholder, title, description, tags, source/demo links)
- "View All Projects" link at the bottom using `brutal-btn-outline` style, linking to `/projects`
- Separated from the section above with a `border-t-[3px]` divider

### Latest Blog Posts Section
- Section header: "LATEST POSTS" badge
- Display the first 3 blog posts from the existing `blogPosts` data
- Each post rendered as a clickable `brutal-card` with tags, date, title, excerpt, and "Read more" arrow (same layout as the Blog page cards)
- "View All Posts" link at the bottom linking to `/blog`
- Separated with a `border-t-[3px]` divider

## Technical Details

### Modified File: `src/pages/Index.tsx`
- Import `projects` from `@/data/projects`
- Import `blogPosts` from `@/data/blog`
- Import additional icons: `ExternalLink` from lucide-react
- Add Featured Projects section after Journey Timeline using `projects.slice(0, 3)` in a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Add Latest Posts section after projects using `blogPosts.slice(0, 3)` as stacked cards
- Both sections use `max-w-7xl` container consistent with other sections

### No new files or dependencies needed
All data and styling utilities already exist.

