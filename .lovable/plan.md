

# Refactor Blog System to MDX Files

## What Changes
Migrate all blog content from the hardcoded TypeScript array in `src/data/blog.ts` into individual `.mdx` files with YAML frontmatter. A new utility module will load and parse these files at build time using Vite's `import.meta.glob`. The existing UI pages will continue working without changes.

## New Files

### 5 MDX files in `src/content/blog/`

Each post becomes its own file named `{slug}.mdx` with frontmatter for metadata and the Markdown body below. Example structure:

```text
---
title: "PID Tuning for a Line-Following Robot"
date: "2025-12-15"
tags: ["Robotics", "Embedded Systems"]
excerpt: "How I tuned a PID controller..."
coverImage: "pid-tuning.jpg"
---

## The Challenge

Building a line-following robot...
```

The `coverImage` field stores just the image filename (e.g. `pid-tuning.jpg`), which maps to the existing images in `src/assets/images/blog/`.

Files to create:
- `src/content/blog/pid-tuning-line-follower.mdx`
- `src/content/blog/ros2-nav-stack-guide.mdx`
- `src/content/blog/kicad-first-pcb.mdx`
- `src/content/blog/solidworks-fea-gripper.mdx`
- `src/content/blog/mechatronics-vs-mechanical.mdx`

### Utility module: `src/lib/blog.ts`

This module will:
- Use `import.meta.glob('../content/blog/*.mdx', { eager: true, query: '?raw', import: 'default' })` to load all MDX files as raw strings at build time
- Use `import.meta.glob('../assets/images/blog/*', { eager: true })` to resolve cover image URLs via Vite's asset pipeline
- Parse YAML frontmatter with a simple regex-based parser (split on `---` delimiters) -- no new dependencies needed
- Export:
  - `getAllPosts(): BlogPost[]` -- all posts sorted by date descending
  - `getPostBySlug(slug: string): BlogPost | undefined`
  - `getAllTags(): string[]` -- unique sorted tag list
  - `BlogPost` type (same shape as current)

## Modified Files

### `src/data/blog.ts`

Replace the entire hardcoded array with a thin re-export wrapper:

```typescript
import { getAllPosts, getAllTags, type BlogPost } from "@/lib/blog";
export type { BlogPost };
export const blogPosts = getAllPosts();
export const blogTags = getAllTags();
```

This preserves the exact same export names and shapes, so consumer files need zero changes.

## Unchanged Files

These files import from `@/data/blog` and will continue working as-is since the exports remain identical:
- `src/pages/Blog.tsx`
- `src/pages/BlogPost.tsx`
- `src/pages/Index.tsx`
- `src/components/MarkdownRenderer.tsx`

## Technical Details

- **No new dependencies** -- uses Vite's `import.meta.glob` for file loading and simple string splitting for frontmatter parsing
- **Image resolution** -- Vite's glob on the blog images directory produces a map like `{ '../assets/images/blog/pid-tuning.jpg': { default: '/assets/pid-tuning-abc123.jpg' } }`. The frontmatter `coverImage` filename is matched against this map to get the resolved URL
- **Slug derivation** -- extracted from the `.mdx` filename (strip path and extension)
- **MDX extension** -- files use `.mdx` as requested; the content is standard Markdown (no JSX), but the extension allows future expansion to embed React components

