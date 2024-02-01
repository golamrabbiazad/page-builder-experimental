import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "@/lib/utils";

export function LoadProject() {
  const editor = useEditor();

  const OPEN_CODE_COMMAND_ID = "core:load";

  return (
    <Button
      type="primary"
      size="small"
      onClick={() => toggleCommand(editor, OPEN_CODE_COMMAND_ID)}
    >
      Load
    </Button>
  );
}
