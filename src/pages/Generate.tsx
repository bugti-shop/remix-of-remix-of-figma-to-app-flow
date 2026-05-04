import TopBar from "@/components/TopBar";
import { ImagePlus, Sparkles, Loader2, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const samplePrompt =
  "Cinematic portrait, dramatic Rembrandt lighting, 35mm film, shallow depth of field, ultra detailed, 8k";

const Generate = () => {
  const [file, setFile] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onPick = (f?: File | null) => {
    if (!f) return;
    setFile(URL.createObjectURL(f));
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1800);
  };

  return (
    <div>
      <TopBar title="Replicate Image" />
      <div className="px-4">
        <p className="text-sm text-muted-foreground">
          Upload any image and we will reverse-engineer the exact AI prompt for you.
        </p>
        <label className="mt-5 flex aspect-square w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-border bg-card text-muted-foreground transition-colors hover:border-primary">
          {file ? (
            <img src={file} alt="upload" className="h-full w-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-2 px-6 text-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <ImagePlus className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-foreground">Tap to upload image</p>
              <p className="text-xs">PNG, JPG up to 10MB</p>
            </div>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={(e) => onPick(e.target.files?.[0])} />
        </label>
        {status === "loading" && (
          <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-card p-4 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            Generating prompt…
          </div>
        )}
        {status === "done" && (
          <div className="mt-5 rounded-2xl bg-card p-4">
            <p className="text-xs uppercase tracking-widest text-primary">Generated Prompt</p>
            <p className="mt-2 text-sm leading-relaxed">{samplePrompt}</p>
            <button
              onClick={() => { navigator.clipboard.writeText(samplePrompt); toast({ title: "Prompt copied" }); }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Copy className="h-4 w-4" /> Copy prompt
            </button>
          </div>
        )}
        <button
          disabled={!file || status === "loading"}
          onClick={() => { setStatus("loading"); setTimeout(() => setStatus("done"), 1500); }}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-semibold text-primary-foreground disabled:opacity-50"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <Sparkles className="h-4 w-4" /> Generate prompt
        </button>
      </div>
    </div>
  );
};

export default Generate;