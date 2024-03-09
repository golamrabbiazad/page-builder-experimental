import { Button, Tooltip } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "@/lib/utils";

export function LoadProject() {
  const editor = useEditor();

  const OPEN_CODE_COMMAND_ID = "core:load";

  return (
    <Tooltip title="Load Project">
      <Button
        type="text"
        size="small"
        onClick={() => toggleCommand(editor, OPEN_CODE_COMMAND_ID)}
      >
        <i className="cursor-pointer fa-solid fa-download" />
      </Button>
    </Tooltip>
  );
}
