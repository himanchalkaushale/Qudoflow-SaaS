import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Smart Automation",
      description:
        "Automate repetitive tasks and workflows with intelligent rules that adapt to your team's needs.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Team Collaboration",
      description:
        "Real-time collaboration tools that keep your team connected and productive from anywhere.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Comprehensive insights and reporting to track progress and optimize your workflows.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with advanced encryption and compliance standards you can trust.",
      icon: <IconCloud />,
    },
    {
      title: "Lightning Fast",
      description:
        "Optimized performance that scales with your team, handling millions of tasks effortlessly.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Easy Integration",
      description:
        "Connect with 100+ tools and services through our powerful API and pre-built integrations.",
      icon: <IconHelp />,
    },
    {
      title: "Workflow Optimization",
      description:
        "Advanced algorithms that continuously optimize your workflows for maximum efficiency.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Customer Success",
      description: "Dedicated support and resources to ensure your team achieves its goals.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-400 dark:text-blue-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 dark:text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
