import { marketingConfig } from "@/config/marketing"
import { FC, ReactNode } from "react"
import { MainNav } from "../main-nav"

interface MarketingLayoutProps {
  children: ReactNode
}

const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          {/* <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </nav> */}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default MarketingLayout
