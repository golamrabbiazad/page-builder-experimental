import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useEditor } from "@grapesjs/react";

export function SaveToast() {
  const { toast } = useToast();
  const editor = useEditor();
  const { Commands } = editor;

  return (
    <Button
      variant="default"
      className="w-32 border border-white"
      onClick={() => {
        Commands.run("core:save");
        toast({
          description: "Project is now saved",
        });
      }}
    >
      Save
    </Button>
  );
}
