

## Restructure Blog Data into Separate Files

### Goal
Move each blog post from the single `src/data/blog.ts` file into its own file inside a `src/data/blog/` folder, making the codebase more organized and easier to maintain.

### New File Structure

```text
src/data/blog/
  index.ts                        -- Re-exports BlogPost type, blogTags, and blogPosts array
  pid-tuning-line-follower.ts     -- PID tuning post
  ros2-nav-stack-guide.ts         -- ROS2 navigation post
  kicad-first-pcb.ts              -- KiCad PCB post
  solidworks-fea-gripper.ts       -- SolidWorks FEA post
  mechatronics-vs-mechanical.ts   -- Mechatronics vs ME post
```

### How It Works

1. **Delete** `src/data/blog.ts`
2. **Create 5 individual post files** -- Each file imports its own cover image and exports a single `BlogPost` object (e.g., `export const pidTuningPost: BlogPost = { ... }`)
3. **Create `src/data/blog/index.ts`** -- Imports all individual posts, defines the `BlogPost` interface and `blogTags`, and exports the combined `blogPosts` array
4. **No changes needed** to `Blog.tsx`, `BlogPost.tsx`, or `Index.tsx` -- They all import from `@/data/blog`, which will now resolve to `src/data/blog/index.ts` automatically

### Technical Details

- Each post file will import its cover image directly (e.g., `import pidTuningImg from "@/assets/images/blog/pid-tuning.jpg"`)
- The `index.ts` barrel file ensures all existing imports (`from "@/data/blog"`) continue to work without any changes to consuming components
- The `BlogPost` interface and `blogTags` constant will live in `index.ts`
- Adding a new blog post in the future means creating one new file and adding one import/entry in `index.ts`

