import { ArrowLeftIcon, CodeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Sign in — DevForge",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CodeIcon className="h-4 w-4" />
            </span>
            DevForge
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeftIcon />
              Back to home
            </Link>
          </Button>
        </div>
      </header>
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
    </div>
  );
}
