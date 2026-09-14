import { ArrowRightIcon, CodeIcon, RocketIcon } from "@radix-ui/react-icons";

export function WhyUs() {
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
