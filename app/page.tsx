import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
          <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mx-auto w-full max-w-2xl flex flex-col items-center gap-7 sm:gap-9">
              <Image
                alt="Roadcorp logo"
                className="fade-up drop-shadow-[0_4px_16px_rgba(0,0,0,0.4),0_0_40px_rgba(139,0,0,0.1)]"
                height={200}
                priority
                sizes="(max-width: 640px) 140px, 200px"
                src="/logos/roadcorp-logo-dark.png"
                width={200}
              />
              <h1 className="fade-up font-semibold text-3xl leading-tight tracking-[-0.02em] [animation-delay:.1s] sm:text-5xl sm:leading-[1.08] sm:tracking-[-0.03em] text-white/95">
                The Road to Infinity
              </h1>
            </div>
          </section>

          {/* Road scroller */}
          <section className="py-5 sm:py-7" id="work">
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
                          <Button
                            asChild
                            className="lift h-auto w-[70vw] rounded-xl border p-5 !bg-transparent transition-all duration-300 !hover:bg-transparent sm:w-[380px] sm:p-6 md:w-[480px]"
                            style={{
                              borderColor: 'rgba(139, 0, 0, 0.25)',
                            }}
                            size="lg"
                            tabIndex={hidden ? -1 : 0}
                            variant="ghost"
                          >
                            <a
                              aria-label={`Visit ${p.name}`}
                              className="group/card flex items-center gap-4 text-left sm:gap-5"
                              href={p.href}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <Image
                                alt={p.alt}
                                className="size-12 flex-shrink-0 object-contain transition-opacity duration-300 sm:size-16 group-hover/card:opacity-90"
                                height={64}
                                loading="lazy"
                                src={p.logo}
                                width={64}
                              />
                              <div className="min-w-0 flex-1">
                                <div className="mb-1.5 flex items-center gap-2">
                                  <h3 className="truncate font-semibold text-lg leading-tight tracking-tight text-white/95 sm:text-xl">
                                    {p.name}
                                  </h3>
                                  <ExternalLink className="size-4 flex-shrink-0 text-muted-foreground opacity-60 transition-opacity duration-300 group-hover/card:opacity-85" />
                                </div>
                                <p className="truncate text-muted-foreground text-sm leading-relaxed opacity-80">
                                  {new URL(p.href).hostname}
                                </p>
                              </div>
                            </a>
                          </Button>
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
  );
}
