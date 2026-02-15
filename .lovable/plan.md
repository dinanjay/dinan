

# Add Journey Timeline Section with Neo-Brutalist Scrolling

## Summary
Create the Journey Timeline section on the landing page (below the tech stack marquee) with a split layout: scrollable timeline on the left and an interactive Leaflet map on the right. The timeline scroll area will use custom Neo-Brutalist styled scrollbar -- thick, sharp-edged, no rounded corners -- matching the site's raw industrial aesthetic.

## Design
- Two-column layout on desktop (timeline left, map right); stacked on mobile
- Timeline panel has a fixed height with overflow scroll
- Custom scrollbar styled in Neo-Brutalist fashion:
  - Visible, chunky scrollbar track with a solid border
  - Thumb uses the primary (blue) color with a hard black border -- no rounded corners
  - Track background matches the card/secondary color
- Section header: "MY JOURNEY" in Space Mono with brutal styling
- Timeline cards use `brutal-border` and `brutal-shadow` with active state highlighting

## Technical Details

### New Dependency
- `react-leaflet` + `leaflet` for the interactive map

### Modified File: `src/data/experience.ts`
- Add `location` (string) and `coordinates` (`[lat, lng]`) to each `TimelineEntry`
- Example: `{ ..., location: "Munich, Germany", coordinates: [48.1351, 11.5820] }`

### New File: `src/components/JourneyTimeline.tsx`
- Renders a vertical timeline list inside a scrollable container
- Each entry: date badge, title, description, location with MapPin icon
- Active entry highlighted with primary border/shadow
- The scroll container uses a custom CSS class for Neo-Brutalist scrollbar styling (no Radix ScrollArea -- pure CSS `::-webkit-scrollbar` for full visual control)

### New File: `src/components/JourneyMap.tsx`
- Leaflet `MapContainer` with CartoDB dark_all tile layer
- Circle markers at each coordinate in primary color
- Flies to coordinates when active entry changes

### Modified File: `src/pages/Index.tsx`
- Import timeline and map components plus experience data
- Add new section after the marquee with a two-column grid
- Manage `activeIndex` state for synchronizing timeline and map

### Modified File: `src/index.css`
- Add Leaflet CSS import
- Add Neo-Brutalist scrollbar styles:
  ```css
  .brutal-scrollbar::-webkit-scrollbar {
    width: 14px;
  }
  .brutal-scrollbar::-webkit-scrollbar-track {
    background: hsl(var(--secondary));
    border-left: 3px solid hsl(var(--foreground));
  }
  .brutal-scrollbar::-webkit-scrollbar-thumb {
    background: hsl(var(--primary));
    border: 3px solid hsl(var(--foreground));
  }
  .brutal-scrollbar {
    scrollbar-color: hsl(var(--primary)) hsl(var(--secondary));
    scrollbar-width: auto;
  }
  ```

