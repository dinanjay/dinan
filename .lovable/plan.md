

# Blog and Projects Upgrade

## Overview

Upgrade the blog system to support rich Markdown content (with images, code blocks, lists, and more) and add cover images to both blog posts and project cards.

## What Changes

### 1. Rich Markdown Rendering for Blog Posts

Currently, the `BlogPost.tsx` page uses a naive `split("\n\n")` parser that only handles `## ` headings and plain paragraphs. This will be replaced with a proper Markdown renderer that supports:

- Headings (h1-h6)
- Images (`![alt](url)`)
- Code blocks with syntax-style styling
- Bold, italic, inline code
- Ordered and unordered lists
- Blockquotes
- Links

**New dependency**: `react-markdown` (with `remark-gfm` for GitHub-flavored markdown tables/strikethrough)

### 2. Cover Images for Blog Posts

Add a `coverImage` field to the `BlogPost` interface in `src/data/blog.ts`. Each post will have a hero image displayed at the top of the article and as a thumbnail in the blog listing.

### 3. Images in Blog Content

Blog post content strings will use standard Markdown image syntax: `![description](/path/to/image.jpg)`. The `react-markdown` renderer will handle these automatically. You can upload images to the project and reference them by path.

### 4. Project Thumbnails

Replace the placeholder `[ thumbnail ]` boxes in `Projects.tsx` with actual images from each project's `image` field, using proper `<img>` tags with aspect ratio handling.

### 5. Styled Markdown Prose

Add brutalist-themed prose styles to `src/index.css` so rendered Markdown content (headings, code blocks, blockquotes, images) matches the neo-brutalist aesthetic.

---

## Technical Details

### Files to Create
- `src/components/MarkdownRenderer.tsx` -- reusable component wrapping `react-markdown` with custom styled elements (headings, images, code blocks, blockquotes) in the brutalist theme

### Files to Modify

- **`src/data/blog.ts`** -- Add `coverImage: string` to the interface; add `coverImage` values and enrich content strings with Markdown image syntax, code blocks, and lists
- **`src/data/projects.ts`** -- Update placeholder `image` values to use real paths (or keep as-is for you to upload later)
- **`src/pages/BlogPost.tsx`** -- Replace the manual paragraph splitter with `<MarkdownRenderer content={post.content} />`; add cover image hero section
- **`src/pages/Blog.tsx`** -- Show cover image thumbnail on each blog card
- **`src/pages/Projects.tsx`** -- Render actual `<img>` tags from `project.image` instead of the placeholder text
- **`src/index.css`** -- Add prose styles for Markdown elements (images get `brutal-border`, code blocks get monospace + secondary background, blockquotes get left border accent)

### New Dependency
- `react-markdown` + `remark-gfm`

### Content Format (No .mdx files needed)

Since this is a client-side React app without a build-time MDX pipeline, blog content stays as Markdown strings in TypeScript. This gives the same authoring experience -- you write Markdown with image references -- without needing complex Vite MDX plugins. The content in `src/data/blog.ts` will use full Markdown:

```text
## The Challenge

Building a line-following robot sounds simple...

![PID controller response curve](/images/blog/pid-response.png)

Here's the Arduino code:

\`\`\`cpp
double kp = 1.2, ki = 0.01, kd = 0.8;
\`\`\`

Key takeaways:
- Derivative term needed more weight than expected
- Low-pass filtering on D term was critical
```

