import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-green-500 text-white">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-gray-700 text-gray-400">
          <X className="size-3" />
        </span>
      )}
      <span className="text-gray-300 font-medium">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
}: PricingCardProps) => {
  const isPro = tier === "Pro"
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border transition-all duration-300",
          "bg-gradient-to-br from-gray-900/90 to-black/90 border-gray-700",
          "hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20",
          isPro && "border-blue-500/50 scale-105 shadow-xl shadow-blue-500/20",
          "p-8",
          className,
        )}
      >
        {isPro && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}
        
        <div className="flex flex-col items-center border-b border-gray-700 pb-6">
          <span className="mb-6 inline-block text-white text-lg font-semibold">
            {tier}
          </span>
          <span className="mb-3 inline-block text-5xl font-bold text-white">
            {price}
          </span>
          <span className="text-gray-400 text-center font-medium">
            {bestFor}
          </span>
        </div>
        
        <div className="space-y-4 py-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        
        <Button
          className={cn(
            "w-full text-lg font-semibold py-6 transition-all duration-300",
            isPro 
              ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg" 
              : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500"
          )}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  )
}

interface PricingDemoProps {
  className?: string
}

export const PricingDemo = ({ className }: PricingDemoProps) => {
  return (
    <section className={cn("relative overflow-hidden bg-black text-white py-16", className)}>
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your team. Start free and upgrade as you grow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <PricingCard
            tier="Free"
            price="$0"
            bestFor="Perfect for individuals"
            CTA="Get Started Free"
            benefits={[
              { text: "Up to 3 projects", checked: true },
              { text: "Basic collaboration", checked: true },
              { text: "Email support", checked: true },
              { text: "5GB storage", checked: true },
              { text: "Advanced analytics", checked: false },
              { text: "Priority support", checked: false },
            ]}
          />
          <PricingCard
            tier="Pro"
            price="$29"
            bestFor="Best for small teams"
            CTA="Start 14-Day Trial"
            benefits={[
              { text: "Unlimited projects", checked: true },
              { text: "Advanced collaboration", checked: true },
              { text: "Priority support", checked: true },
              { text: "100GB storage", checked: true },
              { text: "Advanced analytics", checked: true },
              { text: "Custom integrations", checked: false },
            ]}
          />
          <PricingCard
            tier="Enterprise"
            price="Custom"
            bestFor="For large organizations"
            CTA="Contact Sales"
            benefits={[
              { text: "Everything in Pro", checked: true },
              { text: "Unlimited storage", checked: true },
              { text: "24/7 phone support", checked: true },
              { text: "Custom integrations", checked: true },
              { text: "Advanced security", checked: true },
              { text: "Dedicated success manager", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}