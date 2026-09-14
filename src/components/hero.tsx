import { ArrowRightIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-28">
      <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <LightningBoltIcon className="h-4 w-4 text-primary" />
        {courses.length} hands-on courses, one learning path
      </p>
      <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
        Master development by{" "}
        <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
          building real things
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        TypeScript to Rust, PostgreSQL to Kubernetes. Learn modern development with project-driven
        courses designed for the way you actually work.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <a href="#courses">
            Explore courses
            <ArrowRightIcon />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/learning-path">View learning path</Link>
        </Button>
      </div>
    </section>
  );
}
