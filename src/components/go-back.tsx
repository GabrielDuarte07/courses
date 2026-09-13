"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function GoBack() {
  const router = useRouter();

  return (
    <Button variant="ghost" size="sm" onClick={() => router.back()}>
      <ArrowLeftIcon />
      Go back
    </Button>
  );
}
