import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mt-10 mb-4 font-mono">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold mt-10 mb-4 font-mono">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-bold mt-8 mb-3 font-mono">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-bold mt-6 mb-2 font-mono">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary font-bold underline underline-offset-4 hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        img: ({ src, alt }) => (
          <figure className="my-8">
            <img
              src={src}
              alt={alt || ""}
              className="brutal-border w-full object-cover"
              loading="lazy"
            />
            {alt && (
              <figcaption className="mt-2 text-sm font-mono text-muted-foreground text-center">
                {alt}
              </figcaption>
            )}
          </figure>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-[5px] border-primary pl-4 my-6 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-1 mb-4 text-muted-foreground">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        code: ({ className, children }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return (
              <code className={`block ${className || ""}`}>
                {children}
              </code>
            );
          }
          return (
            <code className="brutal-border px-1.5 py-0.5 text-sm font-mono bg-secondary text-foreground">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="brutal-border bg-secondary p-4 my-6 overflow-x-auto font-mono text-sm leading-relaxed">
            {children}
          </pre>
        ),
        hr: () => <hr className="border-t-[3px] border-foreground my-10" />,
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="brutal-border w-full text-sm">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="brutal-border bg-secondary px-4 py-2 text-left font-mono font-bold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="brutal-border px-4 py-2 text-muted-foreground">{children}</td>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
