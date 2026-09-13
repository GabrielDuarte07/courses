import { BarChartIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseStats, StarRatingBadge } from "@/components/course-meta";
import { GoBack } from "@/components/go-back";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";
import { courses, getCourseBySlug } from "@/data/courses";
import { formatPrice } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Course not found — DevForge" };
  }

  return {
    title: `${course.title} — DevForge`,
    description: course.description,
  };
}

export default async function DetailPage({ params }: Params) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <SiteHeader>
        <GoBack />
      </SiteHeader>
      <main className="flex flex-1 items-center px-6 py-16 sm:py-20">
        <div className="animate-slide-in mx-auto w-full max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div
                className={cn(
                  "relative flex min-h-72 items-center justify-center overflow-hidden bg-gradient-to-br lg:min-h-full",
                  course.accent,
                )}
              >
                <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-black/20 blur-3xl" />
                <div className="relative flex flex-col items-center gap-4 px-8 py-16 text-white lg:py-24">
                  <span className="text-xl font-extrabold uppercase tracking-[0.3em] sm:text-2xl">
                    {course.language}
                  </span>
                  <h1 className="max-w-sm text-center text-3xl font-bold tracking-tight sm:text-4xl">
                    {course.title}
                  </h1>
                  <span className="text-sm font-medium uppercase tracking-widest text-white/80">
                    {course.tagline}
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {course.language}
                  </span>
                  <StarRatingBadge course={course} />
                  <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    <BarChartIcon className="h-3.5 w-3.5" />
                    {course.level}
                  </span>
                </div>
                <p className="mt-5 text-sm font-medium uppercase tracking-wide text-primary">
                  {course.tagline}
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <CourseStats course={course} className="mt-6" />
                <div className="mt-auto flex flex-col items-start gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">Course price</span>
                    <p className="text-4xl font-bold tracking-tight text-foreground">
                      {formatPrice(course.price)}
                    </p>
                  </div>
                  <Button size="lg" className="w-full sm:w-auto">
                    Enroll in course
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
