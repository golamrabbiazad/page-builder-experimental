import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

export function ComponentOutline({ commandId }: { commandId: string }) {
  const editor = useEditor();

  const handleClick = () => {
    toggleCommand(editor, commandId);
  };

  return (
    <Button type="primary" onClick={handleClick}>
      <i className="fa-solid fa-expand" />
    </Button>
  );
}
