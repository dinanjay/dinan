const Footer = () => {
  return (
    <footer className="bg-background border-t-[3px] border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="font-mono text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} MECH<span className="text-primary">_</span>FOLIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
