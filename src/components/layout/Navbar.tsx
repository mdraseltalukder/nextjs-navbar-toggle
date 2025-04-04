"use client";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const { theme, setTheme } = useTheme();
  console.log(theme);

  const navigations = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex items-center justify-between h-16 container mx-auto">
          <Link className="text-2xl font-semibold" href="/">
            HustleArticles
          </Link>
          <div className="flex items-center justify-center gap-4">
            {navigations.map((navigation) => (
              <Link
                key={navigation.name}
                href={navigation.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === navigation.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {navigation.name}
              </Link>
            ))}
          </div>
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className=" size-5 transition-all scale-0 rotate-0 dark:rotate-90 dark:scale-100" />
              <MoonIcon className="size-5 absolute transition-all scale-100 rotate-0 dark:rotate-0 dark:scale-0" />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}
