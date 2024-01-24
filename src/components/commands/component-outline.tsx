import { Scan } from "lucide-react";
import { Button } from "../ui/button";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

export function ComponentOutline({ commandId }: { commandId: string }) {
  const editor = useEditor();

  const handleClick = () => {
    toggleCommand(editor, commandId);
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      <Scan className="h-4 w-4" />
    </Button>
  );
}
