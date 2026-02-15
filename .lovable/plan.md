# Add Fade/Blur Effect to Tech Stack Marquee

## Summary

Add gradient fade masks to the left and right edges of the tech stack marquee section so the scrolling items smoothly fade in and out, creating a polished infinite-scroll illusion.

## Approach

Use CSS `mask-image` (or pseudo-element overlays) on the `.marquee-container` to apply a horizontal linear gradient that fades to transparent on both edges.  
  
when hover marquee should stop.

## Technical Details

### Modified File: `src/index.css`

- Add a `mask-image` / `-webkit-mask-image` property to `.marquee-container` with a horizontal gradient:
  - Transparent at the left edge (0%)
  - Fully visible from ~10% to ~90%
  - Transparent again at the right edge (100%)
- This uses the CSS masking approach (no extra DOM elements needed), which works across modern browsers.

```css
.marquee-container {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}
```

### No other files need changes

The effect is purely CSS on the existing container class.