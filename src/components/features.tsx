import { courses } from "@/data/courses";

export function Features() {
  const report = courses[0];
  const totalHours = courses.reduce((sum, course) => sum + course.durationHours, 0);
  const totalLessons = courses.reduce((sum, course) => sum + course.lessons, 0);
  const languagesCount = new Set(courses.map((course) => course.language)).size;

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
                { label: "Languages", value: languagesCount },
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
