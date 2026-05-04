import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { PromptItem } from "@/data/prompts";

export const PromptCard = ({ item }: { item: PromptItem }) => (
  <Link
    to={`/prompt/${item.id}`}
    className="group relative block overflow-hidden rounded-2xl bg-card"
  >
    <div className="aspect-[3/4] w-full overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
      <p className="line-clamp-2 text-xs font-medium text-white/95">
        {item.prompt}
      </p>
      <div className="mt-2 flex items-center justify-between text-[11px] text-white/70">
        <span>{item.author}</span>
        <span className="inline-flex items-center gap-1">
          <Heart className="h-3 w-3" /> {item.likes}
        </span>
      </div>
    </div>
  </Link>
);

export default PromptCard;