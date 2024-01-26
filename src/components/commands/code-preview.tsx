import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";
import { Button } from "antd";

export function CodePreview() {
  const editor = useEditor();

  const OPEN_CODE_COMMAND_ID = "core:open-code";

  return (
    <Button onClick={() => toggleCommand(editor, OPEN_CODE_COMMAND_ID)}>
      <i className="h-4 w-4 mr-2 fa-solid fa-code" /> Code
    </Button>
  );
}
