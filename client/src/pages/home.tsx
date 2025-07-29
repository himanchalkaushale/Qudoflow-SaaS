import { HeroSection } from "@/components/ui/hero-section-dark"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

import { PricingDemo } from "@/components/ui/dark-gradient-pricing"
import { CTADemo } from "@/components/ui/call-to-action"
import { FooterDemo } from "@/components/ui/footer"
import { IconCloudDemo } from "@/components/ui/interactive-icon-cloud"
import { 
  Zap, 
  Menu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // GSAP animations would go here
    // For now, we'll use CSS transitions
  }, [])

  const testimonials = [
    {
      author: {
        name: "Sarah Johnson",
        handle: "@sarahjohnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Qudoflow has completely transformed how our team collaborates. The automation features alone have saved us 15 hours per week.",
      href: "https://twitter.com/sarahjohnson"
    },
    {
      author: {
        name: "Michael Chen",
        handle: "@michaelchen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that actually move the needle.",
      href: "https://twitter.com/michaelchen"
    },
    {
      author: {
        name: "Emily Brown",
        handle: "@emilybrown",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Implementation was seamless and the support team is incredible. We were up and running in less than a day."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Qudoflow
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:block text-gray-300 hover:text-white">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Sign Up
              </Button>
              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <HeroSection
          title="🚀 Now in Public Beta"
          subtitle={{
            regular: "Streamline Your Workflow, ",
            gradient: "Amplify Your Results",
          }}
          description="Transform your team's productivity with intelligent automation, seamless collaboration, and powerful workflow management. Built for modern teams who demand excellence."
          ctaText="Get Started for Free"
          ctaHref="#"
          secondaryCtaText="Book a Demo"
          secondaryCtaHref="#"
          gridOptions={{
            angle: 65,
            opacity: 0.2,
            cellSize: 60,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </section>

      {/* Trusted By Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Trusted by teams using the best tools
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Join thousands of developers and teams who rely on industry-leading 
                technologies. Qudoflow integrates seamlessly with your existing workflow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Seamless integrations with 50+ tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Built by developers, for developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Enterprise-grade security and reliability</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - 3D Icon Cloud */}
            <div className="flex justify-center lg:justify-end">
              <IconCloudDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powerful features designed to streamline your workflow and boost productivity across your entire organization.
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingDemo />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <TestimonialsSection
          title="Loved by teams worldwide"
          description="See what our customers have to say about their experience with Qudoflow."
          testimonials={testimonials}
        />
      </section>

      {/* CTA Section */}
      <section id="contact">
        <CTADemo />
      </section>

      {/* Footer */}
      <FooterDemo />
    </div>
  )
}
