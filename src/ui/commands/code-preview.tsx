import { Button, Tooltip } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "@/lib/utils";

export function CodePreview() {
  const editor = useEditor();

  const OPEN_CODE_COMMAND_ID = "core:open-code";

  return (
    <Tooltip title="Show Code">
      <Button
        type="text"
        size="small"
        onClick={() => toggleCommand(editor, OPEN_CODE_COMMAND_ID)}
        aria-label="Code Show Button"
      >
        <i className="fa-solid fa-code" />
      </Button>
    </Tooltip>
  );
}
