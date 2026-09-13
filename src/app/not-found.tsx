import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
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
    </>
  );
}
