import { Sparkles } from "lucide-react";

export const TopBar = ({ title, credits = 120 }: { title: string; credits?: number }) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-background/85 px-4 py-3 backdrop-blur-xl">
      <h1
        className="bg-clip-text text-xl font-bold tracking-tight text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(38 95% 60%), hsl(45 95% 55%), hsl(28 90% 50%))",
        }}
      >
        {title}
      </h1>
      <div
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-featured)" }}
        aria-label={`${credits} credits`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span>{credits}</span>
      </div>
    </header>
  );
};

export default TopBar;
