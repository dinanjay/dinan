import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          CONTACT<span className="text-primary">_</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Let's build something together.
        </p>

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
