import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

import { Button } from "antd";

export function Preview() {
  const editor = useEditor();

  const previewCommandId = "core:preview";

  const handleClick = () => {
    toggleCommand(editor, previewCommandId);

    const rightSideBar = document.querySelector(".gjs-right-sidebar");

    if (rightSideBar) {
      console.log(rightSideBar.classList);

      rightSideBar.classList.toggle("toggle-sidebar");
    }
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Preview
    </Button>
  );
}
