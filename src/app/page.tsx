import Link from "next/link";
import { Courses } from "@/components/courses";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button size="sm">Get started</Button>
      </SiteHeader>
      <main className="flex-1">
        <Hero />
        <Courses />
        <WhyUs />
        <Features />
      </main>
      <SiteFooter />
    </div>
  );
}
