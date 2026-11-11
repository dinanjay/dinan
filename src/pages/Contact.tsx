import { useState } from "react";
import { Send, Mail, Linkedin, Github, Download, ExternalLink, Bot, CircuitBoard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const links = [
  { label: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/dinanjayasinghe/", color: "bg-primary text-primary-foreground" },
  { label: "GitHub", icon: Github, url: "https://github.com/dinanjay/", color: "bg-foreground text-background" },
  /*
  { label: "Resume", icon: Download, url: "#", color: "bg-primary text-primary-foreground" },
  { label: "ROS2 Nav Stack", icon: Bot, url: "#", color: "bg-background text-foreground" },
  { label: "IoT Dashboard", icon: CircuitBoard, url: "#", color: "bg-background text-foreground" },
  { label: "Portfolio", icon: ExternalLink, url: "#", color: "bg-background text-foreground" },
  */
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 100) {
      toast({ title: "Error", description: "Name must be less than 100 characters.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 255) {
      toast({ title: "Error", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    if (trimmedMessage.length > 1000) {
      toast({ title: "Error", description: "Message must be less than 1000 characters.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mpqnearp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage
        })
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        toast({
          title: "Submission Failed",
          description: data.errors?.[0]?.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Failed to connect to the server. Please check your network connection.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
              target="_blank"
              rel="noopener noreferrer"
              className={`brutal-border brutal-shadow flex items-center gap-3 px-5 py-4 font-mono font-bold text-sm transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none ${link.color}`}
            >
              <link.icon size={20} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Email display */}
        <div className="brutal-card p-6 mb-10 flex items-center gap-4">
          <Mail size={28} className="text-primary shrink-0" />
          <a href="mailto:hi@dinan.lk" className="font-mono font-bold text-lg sm:text-xl break-all hover:text-primary transition-colors">
            hi@dinan.lk
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-mono font-bold text-sm mb-2 block">NAME</label>
            <input
              type="text"
              value={form.name}
              disabled={isSubmitting}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              maxLength={100}
              className="brutal-input w-full disabled:opacity-60"
            />
          </div>
          <div>
            <label className="font-mono font-bold text-sm mb-2 block">EMAIL</label>
            <input
              type="email"
              value={form.email}
              disabled={isSubmitting}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              maxLength={255}
              className="brutal-input w-full disabled:opacity-60"
            />
          </div>
          <div>
            <label className="font-mono font-bold text-sm mb-2 block">MESSAGE</label>
            <textarea
              value={form.message}
              disabled={isSubmitting}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
              rows={6}
              maxLength={1000}
              className="brutal-input w-full resize-none disabled:opacity-60"
            />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="brutal-btn flex items-center gap-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
