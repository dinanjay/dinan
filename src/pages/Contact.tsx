import { useState } from "react";
import { Send, Mail, Linkedin, Github, Download, ExternalLink, Bot, CircuitBoard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const links = [
  { label: "LinkedIn", icon: Linkedin, url: "#", color: "bg-primary text-primary-foreground" },
  { label: "GitHub", icon: Github, url: "#", color: "bg-foreground text-background" },
  { label: "Resume", icon: Download, url: "#", color: "bg-primary text-primary-foreground" },
  { label: "ROS2 Nav Stack", icon: Bot, url: "#", color: "bg-background text-foreground" },
  { label: "IoT Dashboard", icon: CircuitBoard, url: "#", color: "bg-background text-foreground" },
  { label: "Portfolio", icon: ExternalLink, url: "#", color: "bg-background text-foreground" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          CONTACT<span className="text-primary">_</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-10">
          Find me online or send a message.
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className={`brutal-border brutal-shadow flex items-center gap-3 px-5 py-4 font-mono font-bold text-sm transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${link.color}`}
              onClick={(e) => e.preventDefault()}
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Email display */}
        <div className="brutal-card p-6 mb-10 flex items-center gap-4">
          <Mail size={28} className="text-primary shrink-0" />
          <span className="font-mono font-bold text-lg sm:text-xl break-all">
            hello@mechfolio.dev
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-mono font-bold text-sm mb-2 block">NAME</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="brutal-input w-full"
            />
          </div>
          <div>
            <label className="font-mono font-bold text-sm mb-2 block">EMAIL</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="brutal-input w-full"
            />
          </div>
          <div>
            <label className="font-mono font-bold text-sm mb-2 block">MESSAGE</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
              rows={6}
              className="brutal-input w-full resize-none"
            />
          </div>
          <button type="submit" className="brutal-btn flex items-center gap-2 w-full justify-center">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
