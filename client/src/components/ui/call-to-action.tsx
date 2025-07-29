import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAProps {
  className?: string;
}

function CTA({ className }: CTAProps) {
  return (
    <div className={cn("w-full py-16 bg-black", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 lg:p-16 gap-8 items-center border border-gray-800 hover:border-gray-700 transition-all duration-300">
          <div>
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 px-4 py-2">Get started</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl md:text-6xl tracking-tight max-w-3xl font-bold text-white">
              Ready to transform your workflow?
            </h3>
            <p className="text-xl leading-relaxed text-gray-300 max-w-2xl">
              Join thousands of teams already using Qudoflow to streamline their processes 
              and amplify their results. Start your free trial today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gap-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold">
              Start Free Trial <MoveRight className="w-5 h-5" />
            </Button>
            <Button className="gap-4 bg-white/10 text-white border-white/20 hover:bg-white/20 px-8 py-4 text-lg font-semibold" variant="outline">
              Schedule Demo <PhoneCall className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTADemo() {
  return (
    <div className="w-full">
      <CTA />
    </div>
  );
}

export { CTA, CTADemo };