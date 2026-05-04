import TopBar from "@/components/TopBar";
import { categoryGrid } from "@/data/prompts";
import { useParams } from "react-router-dom";
import { Copy, Heart, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PromptDetail = () => {
  const { id } = useParams();
  const item = categoryGrid.find((i) => i.id === id) ?? categoryGrid[0];
  return (
    <div>
      <TopBar title="Prompt" />
      <div className="px-4">
        <div className="overflow-hidden rounded-3xl">
          <img src={item.image} alt={item.title} className="w-full" />
        </div>
        <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
        <p className="text-xs text-muted-foreground">{item.author} • {item.category}</p>
        <div className="mt-4 rounded-2xl bg-card p-4">
          <p className="text-xs uppercase tracking-widest text-primary">Prompt</p>
          <p className="mt-2 text-sm leading-relaxed">{item.prompt}</p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => { navigator.clipboard.writeText(item.prompt); toast({ title: "Prompt copied" }); }}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Copy className="h-4 w-4" /> Copy prompt
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary"><Heart className="h-4 w-4" /></button>
            <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary"><Share2 className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptDetail;