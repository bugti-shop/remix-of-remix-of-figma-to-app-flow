import TopBar from "@/components/TopBar";
import PromptCard from "@/components/PromptCard";
import { categoryGrid } from "@/data/prompts";
import { useFavorites } from "@/hooks/use-favorites";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { ids } = useFavorites();
  const items = categoryGrid.filter((i) => ids.includes(i.id));

  return (
    <div>
      <TopBar title="Favorites" />
      {items.length === 0 ? (
        <div className="mx-4 mt-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-card py-16 text-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            <Heart className="h-6 w-6" />
          </div>
          <p className="text-sm font-medium">No favorites yet</p>
          <p className="px-8 text-xs text-muted-foreground">
            Tap the heart on any prompt to save it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 px-4">
          {items.map((i) => (
            <PromptCard key={i.id} item={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;