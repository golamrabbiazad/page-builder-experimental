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
      className="w-32 bg-white text-black hover:bg-white hover:text-gray-800"
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
