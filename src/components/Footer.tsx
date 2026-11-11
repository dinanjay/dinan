const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center gap-2">
        <p className="font-mono text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Dinan Jayasinghe. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
          Made with{" "}
          <span
            className="text-red-500 inline-block animate-pulse"
            style={{ animationDuration: "1s" }}
          >
            ❤️
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
