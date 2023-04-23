"use client"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
//import { PromoVideo } from "@/components/promo-video"
import { StyleSwitcher } from "@/components/style-switcher"
//import DashboardPage from "@/app/examples/dashboard/page"
import TradingViewWidget from "@/app/charts/page"

export default function IndexPage() {
  return (
    <div className="container relative pb-10">
      <StyleSwitcher />
      <PageHeader>
        <PageHeaderHeading>Build your component library.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
      </PageHeader>
      <section className="pb-8 md:pb-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex space-x-4">
            <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "pl-6"
              )}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">

      <div className="flex max-w-[980px] flex-col items-start gap-2 overflow-hidden rounded-lg">
          <TradingViewWidget />
        </div>
        {/*<div className="overflow-hidden rounded-lg border bg-background shadow-xl">
          <DashboardPage />
              </div>*/}
      </section>
    </div>
  )
}


{/*}
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import TradingViewWidget from "@/app/charts/page"

export default function IndexPage() {
  return (

    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">

      <Avatar>
      <AvatarImage src="https://github.com/brcelso.png" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>

        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Welcome to the New Age. <br className="hidden sm:inline" />
          Enjoy it!
        </h1>
        
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          This is my page.
          Just Code.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.vercel}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Vercel
        </Link>
      </div>

      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.instagram}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.twitter}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Twitter
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.whatsapp}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          WhatsApp
        </Link>
    
        </div>

        <div className= "flex max-w-[980px] flex-col items-start gap-2 overflow-hidden rounded-lg">
          <TradingViewWidget />
        </div>
        
    </section>

  )
}

*/}
