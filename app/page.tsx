import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Project = {
  name: string;
  href: string;
  logo: string;
  alt: string;
  description: string;
};

const projects: Project[] = [
  {
    name: "Bagaran Agency",
    href: "https://www.bagaranagency.com",
    logo: "/logos/bagaran-light.webp",
    alt: "Bagaran Agency logo",
    description:
      "Creative digital agency specializing in brand identity and web development",
  },
  {
    name: "Lyovson.com",
    href: "https://www.lyovson.com",
    logo: "/logos/crest-dark-simple.png",
    alt: "Lyovson crest logo",
    description:
      "Personal portfolio and blog featuring design insights and projects",
  },
  {
    name: "Avenews",
    href: "https://www.avenews.am",
    logo: "/logos/avenews-logo.png",
    alt: "Avenews logo",
    description:
      "Armenian news platform delivering timely and accurate journalism",
  },
];

export default function Home() {
  return (
    <TooltipProvider>
      <div className="relative min-h-screen w-full">
        {/* Crimson Depth */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        />

        <main className="relative z-10 flex h-dvh flex-col overflow-hidden">
          {/* Hero */}
          <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <Image
              alt="Roadcorp logo"
              className="fade-up mx-auto drop-shadow-sm"
              height={200}
              priority
              sizes="(max-width: 640px) 140px, 200px"
              src="/logos/roadcorp-logo-dark.png"
              width={200}
            />
            <h1 className="fade-up font-semibold text-3xl tracking-tight [animation-delay:.08s] sm:text-5xl">
              The Road to Infinity
            </h1>
          </section>

          {/* Road scroller */}
          <section className="py-4 sm:py-6" id="work">
            <div className="relative">
              <div className="road w-full overflow-hidden border-y">
                <div
                  aria-label="Featured projects"
                  aria-live="off"
                  className="marquee"
                  role="region"
                >
                  <ul className="marquee-track items-stretch gap-6 px-6 py-6 sm:gap-8 sm:py-8">
                    {Array.from(
                      { length: 12 },
                      (_, i) => projects[i % projects.length]
                    ).map((p, idx) => {
                      const hidden = idx >= projects.length;
                      return (
                        <li
                          aria-hidden={hidden}
                          className="inline-block align-top"
                          key={`${p.name}-${idx}`}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                asChild
                                className="lift h-auto w-[70vw] border border-red-950/30 bg-black/40 p-5 backdrop-blur-sm transition-all duration-200 hover:border-red-900/50 hover:bg-black/60 sm:w-[380px] sm:p-6 md:w-[480px]"
                                size="lg"
                                tabIndex={hidden ? -1 : 0}
                                variant="ghost"
                              >
                                <a
                                  aria-label={`Visit ${p.name}`}
                                  className="flex items-center gap-4 text-left sm:gap-5"
                                  href={p.href}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <Image
                                    alt={p.alt}
                                    className="size-12 flex-shrink-0 object-contain sm:size-16"
                                    height={64}
                                    loading="lazy"
                                    src={p.logo}
                                    width={64}
                                  />
                                  <div className="min-w-0 flex-1">
                                    <div className="mb-1 flex items-center gap-2">
                                      <h3 className="truncate font-semibold text-lg tracking-tight sm:text-xl">
                                        {p.name}
                                      </h3>
                                      <ExternalLink className="size-4 flex-shrink-0 text-muted-foreground" />
                                    </div>
                                    <p className="truncate text-muted-foreground text-sm">
                                      {new URL(p.href).hostname}
                                    </p>
                                  </div>
                                </a>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs" side="top">
                              <p className="font-medium">{p.name}</p>
                              <p className="text-muted-foreground text-sm">
                                {p.description}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </TooltipProvider>
  );
}
