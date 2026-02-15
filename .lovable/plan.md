

# Homepage Redesign, Tech Stack Carousel, and Page Consolidation

## Summary
Redesign the homepage inspired by the reference image, convert the tech stack to an auto-scrolling carousel/marquee, remove the Experience page, and merge Links + Contact into a single page.

## Changes

### 1. Homepage Redesign (`src/pages/Index.tsx`)
Inspired by the reference screenshot layout:
- **Two-column hero**: Left side with greeting text, name, bio paragraph, social icons (GitHub, LinkedIn), and a "Get in Touch" button. Right side with a placeholder avatar/image area styled with Neo-Brutalist borders and decorative accent elements.
- **Tech Stack Carousel**: Replace the current static grid with a horizontally auto-scrolling marquee at the bottom of the hero section. The marquee will use CSS animation (infinite scroll) with duplicated items for seamless looping, matching the reference's bottom ticker bar.

### 2. Remove Experience Page
- Delete `src/pages/Experience.tsx` route from `App.tsx`
- Remove "Experience" from the navbar links in `Navbar.tsx`
- Keep `src/data/experience.ts` file in case it's needed later

### 3. Merge Links + Contact into one page (`src/pages/Contact.tsx`)
- Combine the links section (LinkedIn, GitHub, Resume, project links) at the top or side of the contact page
- Keep the contact form below
- Update the route: remove `/links` route, update nav to remove "Links" entry
- The merged page lives at `/contact`

### 4. Navbar Updates (`src/components/Navbar.tsx`)
- Remove "Experience" and "Links" from `navLinks` array
- Final nav: Home, Projects, Blog, Contact + Download CV button

---

## Technical Details

### Auto-scrolling Marquee (Tech Stack)
- Pure CSS `@keyframes` animation scrolling left infinitely
- Content duplicated (rendered twice) so the loop is seamless
- Each tech item shows an icon + name in a bordered block
- Sits at the bottom of the hero, full-width with a top border line

### Merged Contact + Links Page
- Top section: grid/row of Neo-Brutalist link buttons (LinkedIn, GitHub, Resume, etc.)
- Bottom section: existing contact form with email display
- Single responsive layout

### Files Modified
- `src/pages/Index.tsx` -- full redesign with two-column hero + marquee
- `src/pages/Contact.tsx` -- merge in links content
- `src/components/Navbar.tsx` -- remove Experience and Links nav items
- `src/App.tsx` -- remove `/experience` and `/links` routes
- `src/index.css` -- add marquee keyframes animation

### Files to Delete
- `src/pages/Links.tsx` (content merged into Contact)
- `src/pages/Experience.tsx` (removed per request)

