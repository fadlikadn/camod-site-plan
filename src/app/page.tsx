// TODO: Remove this entire file and start your own project from scratch.
// Happy coding!

// import Link from "next/link";

// import { GithubIcon } from "lucide-react";
import MarketingLayout from "@/components/layout/marketing-layout"
import StaticTable from "@/components/static-table"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import TopazRegencyBirdView from "../assets/images/topaz_regency_birdview.jpeg"
import TopazRegencySiteplan from "../assets/images/topaz_regency_siteplan.png"

// import { ThemeToggle } from "@/components/theme-toggle"
// import { siteConfig } from "@/config"

// import { cn } from "@/lib/utils";

export default function IndexPage() {
  return (
    <MarketingLayout>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Bukit Topaz Estate
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Perfect Combination Between Nature and Modern Life
          </p>
          <div className="space-x-4">
            <Link
              href="#gallery"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Kenali lebih jauh
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Action
            </Link>
          </div>
        </div>
      </section>
      <section
        id="gallery"
        className="container space-y-4 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Harmony in Serenity
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Sebuah kawasan perumahan prestisius yang menghadirkan pengalaman
            tinggal di lingkungan yang aman, nyaman dengan suasana alam sekitar
            yang asri nan sejuk berhiaskan pemandangan alaman yang eksotik dan
            natural
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-1">
          <Image
            src={TopazRegencyBirdView}
            alt="Topaz Regency"
            className="rounded-2xl border border-slate-800"
          />
          {/* <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            
          </div> */}
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Bukit Topaz Estate menghadirkan keistimewaan view indahnya wide
            landscape pegunungan yang mengelilingi kota wonosobo, sebelah timur
            bediri kokoh gunung sindoro sumbing, sebelah utara pegunungan Dieng,
            sebelah barat dan selatan perbukitan dengan view panoramic terbaik.
          </p>
        </div>
      </section>
      <section
        id="siteplan"
        className="container space-y-4 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Siteplan
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Tiap bangunan rumah di Bukit Topaz estate didesain secara cermat dan
            tepat sehingga sempurna dengan memafaatkan kontur dataran tinggi dan
            perbukitan.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-1">
          <Image
            src={TopazRegencySiteplan}
            alt="Topaz Regency"
            className="rounded-2xl border border-slate-800"
          />
        </div>
      </section>
      <section id="unit" className="container space-y-4 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Ketersediaan Unit
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Pastikan Anda telah menentukan pilihan terbaik untuk investasi
            kehidupan jangka panjang
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-1">
          <div className="rounded-md border">
            <StaticTable />
          </div>
        </div>
      </section>
      <section id="proudly" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Pastikan Anda telah memastikan investasi di unit terbaik
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Bukit Topaz Estate - Perfect Combination Between Nature and Modern
            Life
          </p>
        </div>
      </section>
    </MarketingLayout>
  )
}

{
  /* <main className="container grid max-w-prose items-center gap-6 space-y-4 pb-8 pt-6 text-balance md:py-10">
        <div className="flex min-h-[50vh] flex-col justify-center gap-3">
          <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
          <p className="text-slate-500">{siteConfig.description}</p>
          <div className="space-x-2">
            <ThemeToggle variant="outline" size="icon" />
          </div>
        </div>
        <div className="fixed -bottom-1/3 -right-1/3 -z-10 h-[50rem] w-[50rem] animate-pulse rounded-full ![animation-duration:5s] [background-image:radial-gradient(circle_at_center,#9994_0,transparent,transparent_100%)]" />
      </main> */
}
