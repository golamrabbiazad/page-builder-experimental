import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

import { Button } from "../ui/button";

export function Preview() {
  const editor = useEditor();

  const previewCommandId = "core:preview";

  const handleClick = () => {
    toggleCommand(editor, previewCommandId);

    const rightSideBar = document.querySelector(".gjs-right-sidebar");

    if (rightSideBar) {
      rightSideBar.classList.toggle("hidden");
    }
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      Preview
    </Button>
  );
}
