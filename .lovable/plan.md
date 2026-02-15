

# Add Global Footer

## Summary
Create a Neo-Brutalist styled footer component and add it to the app layout so it appears on every page.

## Design
- Thick top border (3px solid black), matching the navbar's bottom border
- Three sections in a row on desktop, stacked on mobile:
  - **Left**: Copyright text with name and current year (font-mono)
  - **Center**: Navigation links (Home, Projects, Blog, Contact)
  - **Right**: Social icons (GitHub, LinkedIn) with brutal-border styling
- Background matches the site background; keeps the raw, industrial feel

## Technical Details

### New File: `src/components/Footer.tsx`
- Displays copyright: "© 2026 Mech_Folio. All rights reserved."
- Row of nav links matching the navbar entries
- GitHub and LinkedIn icon buttons with the same brutal-shadow hover effect used elsewhere
- Responsive: flexbox row on desktop, stacked center-aligned on mobile

### Modified File: `src/App.tsx`
- Import and render `<Footer />` below `<AnimatedRoutes />` inside the `<BrowserRouter>`, so it appears on all pages

