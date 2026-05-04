import TopBar from "@/components/TopBar";
import { ImagePlus, Sparkles, Loader2, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // strip "data:<mime>;base64,"
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const Generate = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [prompt, setPrompt] = useState<string>("");

  const onPick = (f?: File | null) => {
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setStatus("idle");
    setPrompt("");
  };

  const generate = async () => {
    if (!file) return;
    setStatus("loading");
    setPrompt("");
    try {
      const base64 = await fileToBase64(file);
      const { data, error } = await supabase.functions.invoke("analyze-image", {
        body: { imageBase64: base64, mimeType: file.type },
      });
      if (error) throw error;
      if (!data?.prompt) throw new Error(data?.error || "No prompt returned");
      setPrompt(data.prompt);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("idle");
      const msg = e instanceof Error ? e.message : "Failed to analyze image";
      toast({ title: "Generation failed", description: msg });
    }
  };

  return (
    <div>
      <TopBar title="Replicate Image" />
      <div className="px-4">
        <p className="text-sm text-muted-foreground">
          Upload any image and Gemini will reverse-engineer a detailed AI prompt for you.
        </p>
        <label className="mt-5 flex aspect-square w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-border bg-card text-muted-foreground transition-colors hover:border-primary">
          {preview ? (
            <img src={preview} alt="upload" className="h-full w-full object-cover" />
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
            Analyzing image with Gemini…
          </div>
        )}
        {status === "done" && prompt && (
          <div className="mt-5 rounded-2xl bg-card p-4">
            <p className="text-xs uppercase tracking-widest text-primary">Generated Prompt</p>
            <p className="mt-2 text-sm leading-relaxed">{prompt}</p>
            <button
              onClick={() => { navigator.clipboard.writeText(prompt); toast({ title: "Prompt copied" }); }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Copy className="h-4 w-4" /> Copy prompt
            </button>
          </div>
        )}
        <button
          disabled={!file || status === "loading"}
          onClick={generate}
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