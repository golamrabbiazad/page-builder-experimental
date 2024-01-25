import { useEditor } from "@grapesjs/react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export function DiscardButton() {
  const { toast } = useToast();
  const editor = useEditor();

  const { Commands } = editor;

  return (
    <Button
      variant="ghost"
      onClick={() => {
        Commands.run("core:canvas-clear");

        toast({
          description:
            "Your changes have been discarded. You are now being redirected to the admin page.",
        });
      }}
    >
      Discard
    </Button>
  );
}
