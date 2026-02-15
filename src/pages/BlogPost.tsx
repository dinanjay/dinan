import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="brutal-btn inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm font-bold text-primary mb-8 hover:underline"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {post.coverImage && post.coverImage !== "/placeholder.svg" && (
          <div className="brutal-border mb-8 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="brutal-border px-2 py-0.5 text-xs font-mono font-bold bg-primary text-primary-foreground">
              {tag}
            </span>
          ))}
          <span className="text-sm text-muted-foreground font-mono ml-auto">{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">{post.title}</h1>

        <div className="prose-brutal">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
