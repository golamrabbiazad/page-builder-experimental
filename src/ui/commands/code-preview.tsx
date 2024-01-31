import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "@/lib/utils";

export function CodePreview() {
  const editor = useEditor();

  const OPEN_CODE_COMMAND_ID = "core:open-code";

  return (
    <Button
      type="primary"
      size="small"
      onClick={() => toggleCommand(editor, OPEN_CODE_COMMAND_ID)}
    >
      <i style={{ marginRight: "0.5rem" }} className="fa-solid fa-code fa-sm" />{" "}
      Code
    </Button>
  );
}
