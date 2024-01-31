import { toggleCommand } from "@/lib/utils";
import { useEditor } from "@grapesjs/react";

import { Button } from "antd";

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
    <Button size="small" type="primary" onClick={handleClick}>
      Preview
    </Button>
  );
}
