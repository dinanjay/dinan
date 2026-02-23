import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";
import { blogPosts, blogTags } from "@/data/blog";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          BLOG<span className="text-primary">_</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Thoughts on robotics, embedded systems, and engineering.
        </p>

        {/* Search & Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="brutal-input w-full !pl-14 font-mono text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`brutal-border px-3 py-1 font-mono text-sm font-bold transition-colors ${
                !activeTag ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"
              }`}
            >
              All
            </button>
            {blogTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`brutal-border px-3 py-1 font-mono text-sm font-bold transition-colors ${
                  activeTag === tag ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="brutal-card block group overflow-hidden"
            >
              {post.coverImage && post.coverImage !== "/placeholder.svg" && (
                <div className="h-48 border-b-[3px] border-foreground overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono font-bold text-primary">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground font-mono ml-auto">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                <span className="font-mono text-sm font-bold text-primary flex items-center gap-1">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="brutal-border p-12 text-center">
              <p className="font-mono text-muted-foreground">No articles found.</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </main>
  );
};

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    if (trimmed.length > 255) {
      toast.error("Email must be less than 255 characters.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const existing: string[] = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]");
    if (existing.includes(trimmed)) {
      toast.info("You're already subscribed!");
      return;
    }

    localStorage.setItem("newsletter_subscribers", JSON.stringify([...existing, trimmed]));
    toast.success("Subscribed! You'll be notified of new posts.");
    setEmail("");
  };

  return (
    <div className="mt-16 brutal-border brutal-shadow-primary bg-card p-8">
      <h2 className="font-mono text-2xl font-bold mb-2">
        STAY UPDATED<span className="text-primary">_</span>
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Get notified when I publish new posts.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          maxLength={255}
          className="brutal-input flex-1"
        />
        <button type="submit" className="brutal-btn flex items-center justify-center gap-2">
          <Mail size={18} /> Subscribe
        </button>
      </form>
    </div>
  );
};

export default Blog;
