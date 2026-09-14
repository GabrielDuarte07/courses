"use client";

import { BarChartIcon, ClockIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import * as React from "react";
import { CourseStats, StarRatingBadge } from "@/components/course-meta";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/components/ui/utils";
import { type Course, courses } from "@/data/courses";
import { formatPrice } from "@/lib/format";

function CourseCard({ course, active }: { course: Course; active: boolean }) {
  return (
    <Link
      href={`/detail/${course.slug}`}
      aria-current={active}
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border bg-card text-left shadow-lg transition-all",
        active
          ? "border-primary/70 outline outline-2 outline-primary/40"
          : "border-border hover:border-primary/50",
      )}
    >
      <div
        className={cn(
          "h-20 w-full bg-gradient-to-br to-transparent",
          course.accent,
        )}
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {course.language}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <StarFilledIcon className="h-3.5 w-3.5 text-amber-400" />
            {course.rating.toFixed(1)}
          </span>
        </div>
        <h4 className="text-base font-semibold leading-tight text-foreground">
          {course.title}
        </h4>
        <p className="text-sm text-muted-foreground">{course.tagline}</p>
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ClockIcon className="h-3.5 w-3.5" />
            {course.durationHours}h
          </span>
          <span className="flex items-center gap-1">
            <BarChartIcon className="h-3.5 w-3.5" />
            {course.level}
          </span>
          <span className="ml-auto text-sm font-semibold text-primary">
            {formatPrice(course.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

function CourseDetails({ course }: { course: Course }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl">
      <div
        className={cn(
          "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
          course.accent,
        )}
      />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {course.language}
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {course.level}
            </span>
            <StarRatingBadge course={course} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {course.title}
          </h3>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {course.tagline}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {course.description}
          </p>
          <CourseStats course={course} />
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div>
            <span className="text-xs text-muted-foreground">Course price</span>
            <p className="text-4xl font-bold tracking-tight text-foreground">
              {formatPrice(course.price)}
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href={`/detail/${course.slug}`}>Check it out</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function CourseDots({
  selected,
  total,
  onSelect,
}: {
  selected: number;
  total: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      role="tablist"
      aria-label="Course slides"
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          // biome-ignore lint/suspicious/noArrayIndexKey: dots are a fixed, non-reorderable list keyed by position
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Go to course ${index + 1}`}
          aria-current={selected === index}
          className={cn(
            "h-2 rounded-full transition-all",
            selected === index
              ? "w-6 bg-primary"
              : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70",
          )}
        />
      ))}
    </div>
  );
}

export function CourseCarousel() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const autoplayRef = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => setCurrent(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  const goTo = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  const activeCourse = courses[current];

  return (
    <div className="flex flex-col gap-8">
      <CourseDetails course={activeCourse} />
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[autoplayRef.current]}
        setApi={setCarouselApi}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {courses.map((course, index) => (
            <CarouselItem
              key={course.id}
              className="basis-4/5 pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="h-full">
                <CourseCard course={course} active={index === current} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <CourseDots selected={current} total={courses.length} onSelect={goTo} />
    </div>
  );
}
