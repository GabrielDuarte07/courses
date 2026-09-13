import { ArrowRightIcon, CodeIcon, LightningBoltIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CourseCarousel } from "@/components/course-carousel";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CodeIcon className="h-4 w-4" />
          </span>
          DevForge
        </a>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-28">
      <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <LightningBoltIcon className="h-4 w-4 text-primary" />
        15 hands-on courses, one learning path
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
        <Button size="lg" variant="outline">
          View learning path
        </Button>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="scroll-mt-20 py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured courses
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pick a course, start building
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Each card opens its own course page — or let the carousel spin and watch the details
            update live.
          </p>
        </div>
        <CourseCarousel />
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="scroll-mt-20 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Why learners choose DevForge
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: RocketIcon,
              title: "Project-driven",
              body: "Every module ends in something you can ship. No toy examples, no filler.",
            },
            {
              icon: CodeIcon,
              title: "Modern stack",
              body: "Rust, Go, GraphQL, Next.js, Kubernetes — the tools teams actually use in 2026.",
            },
            {
              icon: ArrowRightIcon,
              title: "Lifetime access",
              body: "Pay once, learn forever. Free updates whenever a course is refreshed.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const report = courses[0];
  const totalHours = courses.reduce((sum, course) => sum + course.durationHours, 0);
  const totalLessons = courses.reduce((sum, course) => sum + course.lessons, 0);

  return (
    <section id="features" className="scroll-mt-20 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                The full catalog
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to go from beginner to builder
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {courses.length} courses across backend, frontend, databases, and cloud. Dive
                straight into <span className="text-foreground">{report.title}</span>, or follow the
                path and learn in the order that makes sense.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Courses", value: courses.length },
                { label: "Hours of content", value: totalHours },
                { label: "Lessons", value: `${totalLessons}+` },
                { label: "Languages", value: 15 },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-background p-6">
                  <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

export default function Home() {
  return (
    <div className="animate-slide-in flex flex-1 flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Courses />
        <WhyUs />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
