import Image from "next/image"
import Link from "next/link"
import SVGIcons from "public/rat.svg"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { SignUp } from "./auth/singn-up"
import { Search } from "./search"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={SVGIcons}
            alt="Rat"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>

        {/* Navigaition */}
        <MainNav items={siteConfig.mainNav} />

        {/* External Links */}
        <div className="flex items-center space-x-4">
          <Search />

          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Sign Up */}
          <SignUp />
        </div>
      </div>
    </header>
  )
}
