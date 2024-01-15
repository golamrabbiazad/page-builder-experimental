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
    <Button variant="outline" onClick={handleClick}>
      <Scan className="h-4 w-4 text-black dark:text-slate-100" />
    </Button>
  );
}
