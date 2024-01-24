import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

export function Preview({ commandId }: { commandId: string }) {
  const editor = useEditor();

  const handleClick = () => {
    toggleCommand(editor, commandId);
    const rightSideBar = document.querySelector(".gjs-right-sidebar");

    rightSideBar?.classList.toggle("hidden");
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      <Eye className="h-4 w-4" />
    </Button>
  );
}
