export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevForge. Built for builders.
        </p>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#courses" className="hover:text-foreground">
            Courses
          </a>
          <a href="#why" className="hover:text-foreground">
            Why us
          </a>
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
        </nav>
      </div>
    </footer>
  );
}
