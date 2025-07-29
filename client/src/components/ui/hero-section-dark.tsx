import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "🚀 Now in Public Beta",
      subtitle = {
        regular: "Streamline Your Workflow, ",
        gradient: "Amplify Your Results",
      },
      description = "Transform your team's productivity with intelligent automation, seamless collaboration, and powerful workflow management. Built for modern teams who demand excellence.",
      ctaText = "Get Started for Free",
      ctaHref = "#",
      secondaryCtaText = "Book a Demo",
      secondaryCtaHref = "#",
      bottomImage,
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-black bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(30,30,30,0.8),rgba(0,0,0,1))]" />
        <section className="relative max-w-full mx-auto z-1 min-h-screen flex items-center justify-center">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-4xl leading-0 lg:leading-5 mx-auto text-center">
              <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>
              <h2 className="text-5xl md:text-7xl tracking-tighter font-geist mx-auto leading-tight">
                <span className="text-white">
                  {subtitle.regular}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-blue-400/30 to-transparent dark:from-zinc-300/5 dark:via-blue-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-blue-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-blue-400/30 transition-all sm:w-auto py-4 px-10 text-lg font-medium"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  {secondaryCtaText}
                </a>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <img
                  src={bottomImage.light}
                  className="w-full shadow-lg rounded-lg border border-gray-200 dark:hidden"
                  alt="Dashboard preview"
                />
                <img
                  src={bottomImage.dark}
                  className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
                  alt="Dashboard preview"
                />
              </div>
            )}
            
            {/* Dashboard Preview Mockup */}
            <div className="mt-16 relative">
              <div className="relative mx-auto max-w-5xl">
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-800">
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-400 text-sm">Qudoflow Dashboard</span>
                    </div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30">
                        <h3 className="text-white font-semibold mb-2">Active Projects</h3>
                        <p className="text-3xl font-bold text-blue-400">24</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
                        <h3 className="text-white font-semibold mb-2">Completed Tasks</h3>
                        <p className="text-3xl font-bold text-green-400">156</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
                        <h3 className="text-white font-semibold mb-2">Team Members</h3>
                        <p className="text-3xl font-bold text-purple-400">12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
