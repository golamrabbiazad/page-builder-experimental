import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

export function Preview({ commandId }: { commandId: string }) {
  const editor = useEditor();

  const handleClick = () => {
    toggleCommand(editor, commandId);
    const leftSideBar = document.querySelector(".gjs-left-sidebar");
    const rightSideBar = document.querySelector(".gjs-right-sidebar");

    leftSideBar?.classList.toggle("hidden");
    rightSideBar?.classList.toggle("hidden");
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <Eye className="h-4 w-4 text-black dark:text-slate-100" />
    </Button>
  );
}
