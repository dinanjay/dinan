

# Add Blueprint Grid Background

## Summary
Add a subtle dark square grid pattern (graph paper / blueprint style) over the existing background, maintaining all current Neo-Brutalist design elements.

## Changes

### Modified File: `src/index.css`

Update the `body` styles to include a CSS background grid pattern using `background-image` with repeating linear gradients:

- Use semi-transparent lines (e.g., `rgba(255,255,255,0.05)` for dark mode, `rgba(0,0,0,0.06)` for light mode) to create a subtle square grid
- Grid cell size: ~40px squares
- Line thickness: 1px
- The grid overlays on top of the existing `--background` color
- Add dark-mode-specific grid using `.dark body` selector for appropriate contrast

The implementation uses pure CSS `background-image` with two `linear-gradient` layers (one horizontal, one vertical) -- no extra DOM elements or images needed.

### Technical Detail

```css
body {
  background-image:
    linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}

.dark body {
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

No other files need changes -- the grid applies globally via `body` styling.

