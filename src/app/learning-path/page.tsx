import {
  BarChartIcon,
  CalendarIcon,
  ClockIcon,
  CodeIcon,
  LayersIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { GoBack } from "@/components/go-back";
import { LearningPathChart } from "@/components/learning-path-chart";
import { SiteHeader } from "@/components/site-header";
import { courses } from "@/data/courses";
import { knowledge, milestones, tracks } from "@/data/learning-path";

export const metadata: Metadata = {
  title: "Learning path — DevForge",
  description:
    "See how your knowledge compounds week by week across frontend, backend, and cloud with the DevForge curriculum.",
};

const milestoneIcons = [LightningBoltIcon, CodeIcon, RocketIcon, BarChartIcon];

export default function LearningPathPage() {
  const weeks = knowledge.length - 1;
  const totalHours = courses.reduce((sum, course) => sum + course.durationHours, 0);

  return (
    <>
      <SiteHeader>
        <GoBack />
      </SiteHeader>
      <main className="flex-1 px-6 py-16 sm:py-20">
        <div className="animate-slide-in mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <LightningBoltIcon className="h-4 w-4 text-primary" />
              {tracks.length} tracks, {weeks} weeks, one goal
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Knowledge that compounds,{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent">
                week by week
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Follow the path frontend → backend → cloud. Each week adds new skills on top of the
              last, so progress is steady, visible, and compounding.
            </p>
          </div>

          <LearningPathChart className="mt-12" />

          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              {
                icon: CalendarIcon,
                label: "Weeks to mastery",
                value: String(weeks),
              },
              {
                icon: LayersIcon,
                label: "Learning tracks",
                value: String(tracks.length),
              },
              {
                icon: RocketIcon,
                label: "Milestones",
                value: String(milestones.length),
              },
              {
                icon: ClockIcon,
                label: "Hours of content",
                value: String(totalHours),
              },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-primary">
                  <stat.icon className="h-5 w-5" />
                  <p className="text-3xl font-extrabold">{stat.value}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <section className="mt-20">
            <div className="mb-10 flex flex-col gap-2 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Along the way
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Four milestones to ship
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Small, shippable wins mapped to your first {weeks} weeks — proof of progress at
                every step.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {milestones.map((milestone, index) => {
                const Icon = milestoneIcons[index % milestoneIcons.length];
                return (
                  <div
                    key={milestone.week}
                    className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Week {milestone.week}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {milestone.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
