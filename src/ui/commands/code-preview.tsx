import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "@/lib/utils";

export function CodePreview() {
  const editor = useEditor();

  const OPEN_CODE_COMMAND_ID = "core:open-code";

  return (
    <Button
      type="primary"
      onClick={() => toggleCommand(editor, OPEN_CODE_COMMAND_ID)}
    >
      <i
        style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }}
        className="fa-solid fa-code"
      />{" "}
      Code
    </Button>
  );
}
