import TopBar from "@/components/TopBar";
import SectionHeader from "@/components/SectionHeader";
import PromptCard from "@/components/PromptCard";
import {
  categories,
  categoryRows,
  featured,
  trendingNow,
} from "@/data/prompts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import bannerFaces from "@/assets/banner-faces.jpg";
import chatgptLogo from "@/assets/logos/chatgpt.png";
import geminiLogo from "@/assets/logos/gemini.png";
import midjourneyLogo from "@/assets/logos/midjourney.png";

const Feed = () => {
  const [active, setActive] = useState("All");
  return (
    <div>
      <TopBar title="AI Prompt Feed" />

      {/* Chips */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-muted-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <SectionHeader title="Trending" action="See all" />
      <div className="grid grid-cols-2 gap-3 px-4">
        {trendingNow.map((it) => (
          <PromptCard key={it.id} item={it} />
        ))}
      </div>

      {/* Featured */}
      <div className="px-4">
        <Link
          to={`/prompt/${featured.id}`}
          className="relative mt-5 block overflow-hidden rounded-2xl px-4 py-4"
          style={{
            backgroundColor: "hsl(35 35% 10%)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <img
            src={bannerFaces}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, hsl(35 40% 8% / 0.85) 0%, hsl(35 40% 8% / 0.55) 50%, hsl(35 40% 8% / 0.3) 100%)",
            }}
          />
          <div className="relative">
            <p className="text-[11px] font-medium tracking-wide text-foreground/80">
              Works Across
            </p>
            <h3 className="mt-0.5 text-xl font-bold text-foreground">
              Leading AI Models
            </h3>
            <div className="mt-3 flex items-center gap-2">
              {[
                { src: geminiLogo, alt: "Gemini", bg: "bg-background" },
                { src: chatgptLogo, alt: "ChatGPT", bg: "bg-secondary" },
                { src: midjourneyLogo, alt: "Midjourney", bg: "bg-secondary" },
              ].map((l) => (
                <div
                  key={l.alt}
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full p-1",
                    l.bg
                  )}
                >
                  <img src={l.src} alt={l.alt} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>

      {categoryRows.map((row) => (
        <section key={row.label}>
          <SectionHeader title={row.label} action="See all" />
          <div className="grid grid-cols-2 gap-3 px-4">
            {row.items.map((it) => (
              <PromptCard key={it.id} item={it} />
            ))}
          </div>
        </section>
      ))}

      <p className="mt-8 text-center text-[11px] text-muted-foreground">
        — End of feed —
      </p>
    </div>
  );
};

export default Feed;