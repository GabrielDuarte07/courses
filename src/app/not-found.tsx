import { ArrowLeftIcon, CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CodeIcon className="h-4 w-4" />
            </span>
            DevForge
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-6xl font-extrabold tracking-tight text-primary">404</p>
        <h1 className="max-w-md text-2xl font-bold tracking-tight sm:text-3xl">Course not found</h1>
        <p className="max-w-md text-muted-foreground">
          The course you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button size="lg" asChild>
          <Link href="/#courses">
            <ArrowLeftIcon />
            Back to courses
          </Link>
        </Button>
      </main>
    </div>
  );
}
