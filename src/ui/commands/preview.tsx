import { toggleCommand } from "@/lib/utils";
import { useEditor } from "@grapesjs/react";

import { Button, Tooltip } from "antd";

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
    <Tooltip title="Preview">
      <Button
        size="small"
        type="text"
        onClick={handleClick}
        aria-label="Preview Button"
      >
        <i className="cursor-pointer fa-solid fa-eye" />
      </Button>
    </Tooltip>
  );
}
