import { ClockIcon, LayersIcon, PersonIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/components/ui/utils";
import type { Course } from "@/data/courses";
import { formatStudents } from "@/lib/format";

export function CourseStats({ course, className }: { course: Course; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground",
        className,
      )}
    >
      <span className="flex items-center gap-2">
        <ClockIcon className="h-4 w-4" />
        {course.durationHours}h of content
      </span>
      <span className="flex items-center gap-2">
        <LayersIcon className="h-4 w-4" />
        {course.lessons} lessons
      </span>
      <span className="flex items-center gap-2">
        <PersonIcon className="h-4 w-4" />
        {formatStudents(course.students)} students
      </span>
    </div>
  );
}

export function StarRatingBadge({ course }: { course: Course }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      <StarFilledIcon className="h-3.5 w-3.5 text-amber-400" />
      {course.rating.toFixed(1)} rating
    </span>
  );
}
