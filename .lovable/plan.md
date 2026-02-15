

# Fix Leaflet Map Z-Index

## Problem
The Leaflet map's internal elements use high z-index values (tile pane: 200, controls: 1000+), causing them to render on top of the navbar (z-50) and potentially the mobile overlay.

## Fix

### File: `src/components/JourneyMap.tsx`

Add `z-0` (or a low explicit z-index) to the map's wrapper div so the entire map and its internal z-index hierarchy are contained within a low stacking context.

**Change the wrapper div (line 76):**

From:
```tsx
<div className="brutal-border h-[500px] overflow-hidden">
```

To:
```tsx
<div className="brutal-border h-[500px] overflow-hidden relative z-0">
```

Adding `relative z-0` creates a new stacking context for the map container. All of Leaflet's internal z-index values (200, 400, 1000, etc.) will be scoped within this `z-0` context, so the map will never overlap the navbar's `z-50`.

