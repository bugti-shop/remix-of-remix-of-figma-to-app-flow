import TopBar from "@/components/TopBar";
import PromptCard from "@/components/PromptCard";
import { categoryGrid } from "@/data/prompts";

const History = () => (
  <div>
    <TopBar title="History" />
    <div className="grid grid-cols-2 gap-3 px-4">
      {categoryGrid.slice(2, 10).map((i) => (
        <PromptCard key={i.id} item={i} />
      ))}
    </div>
  </div>
);

export default History;