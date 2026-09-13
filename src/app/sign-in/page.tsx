import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Sign in — DevForge",
};

export default function SignInPage() {
  return (
    <>
      <SiteHeader>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeftIcon />
            Back to home
          </Link>
        </Button>
      </SiteHeader>
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="animate-slide-in w-full max-w-md">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
              <p className="text-sm text-muted-foreground">
                Sign in to your DevForge account to continue learning.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Forgot my password?
                  </button>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="mt-2">
                Login
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
