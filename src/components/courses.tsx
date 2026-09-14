import { CourseCarousel } from "@/components/course-carousel";

export function Courses() {
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
