export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
  content: string;
}

// Load all .mdx files as raw strings at build time
const mdxModules = import.meta.glob('../content/blog/*.mdx', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

// Load all blog images to resolve filenames to URLs
const imageModules = import.meta.glob('../assets/images/blog/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Build a filename -> resolved URL map for images
const imageMap: Record<string, string> = {};
for (const [path, mod] of Object.entries(imageModules)) {
  const filename = path.split('/').pop()!;
  imageMap[filename] = mod;
}

function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, content: raw };
  }

  const frontmatter: Record<string, string> = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  }

  return { frontmatter, content: match[2].trim() };
}

function parseTags(raw: string): string[] {
  // Parse ["tag1", "tag2"] format
  const match = raw.match(/\[([^\]]*)\]/);
  if (!match) return [];
  return match[1]
    .split(',')
    .map(t => t.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

function parseAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, raw] of Object.entries(mdxModules)) {
    const slug = path.split('/').pop()!.replace(/\.mdx$/, '');
    const { frontmatter, content } = parseFrontmatter(raw);

    posts.push({
      slug,
      title: frontmatter.title || '',
      date: frontmatter.date || '',
      tags: parseTags(frontmatter.tags || '[]'),
      excerpt: frontmatter.excerpt || '',
      coverImage: imageMap[frontmatter.coverImage] || '/placeholder.svg',
      content,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const cachedPosts = parseAllPosts();

export function getAllPosts(): BlogPost[] {
  return cachedPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return cachedPosts.find(p => p.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  for (const post of cachedPosts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort();
}
