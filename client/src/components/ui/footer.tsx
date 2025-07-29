import { cn } from "@/lib/utils"

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
  className?: string;
}

const Footer = ({
  logo = {
    src: "/logo.svg",
    alt: "Qudoflow",
    title: "Qudoflow",
    url: "#",
  },
  tagline = "Streamline your workflow, amplify your results.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Features", url: "#features" },
        { text: "Pricing", url: "#pricing" },
        { text: "Integrations", url: "#" },
        { text: "API", url: "#" },
        { text: "Documentation", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Press", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help Center", url: "#" },
        { text: "Community", url: "#" },
        { text: "Tutorials", url: "#" },
        { text: "Webinars", url: "#" },
        { text: "Status", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookie Policy", url: "#" },
        { text: "GDPR", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Qudoflow. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
  className,
}: FooterProps) => {
  return (
    <section className={cn("py-32 bg-black border-t border-gray-800", className)}>
      <div className="container mx-auto px-4">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <p className="text-xl font-semibold text-white">{logo.title}</p>
                </a>
              </div>
              <p className="mt-4 font-medium text-gray-400">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-4 text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-blue-400 transition-colors"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-gray-800 pt-8 text-sm font-medium text-gray-400 md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-blue-400 transition-colors">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

function FooterDemo() {
  return <Footer />;
}

export { Footer, FooterDemo };