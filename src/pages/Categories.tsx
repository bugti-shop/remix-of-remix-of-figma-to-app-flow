import TopBar from "@/components/TopBar";
import PromptCard from "@/components/PromptCard";
import { categories, categoryGrid } from "@/data/prompts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Categories = () => {
  const [active, setActive] = useState("All");
  const items =
    active === "All"
      ? categoryGrid
      : categoryGrid.filter((i) => i.category === active);
  return (
    <div>
      <TopBar title="Categories" />
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-muted-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4">
        {items.map((i) => (
          <PromptCard key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};

export default Categories;