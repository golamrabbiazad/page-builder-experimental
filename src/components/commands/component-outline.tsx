import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "./toggle-command";

export function ComponentOutline({ commandId }: { commandId: string }) {
  const editor = useEditor();

  const handleClick = () => {
    toggleCommand(editor, commandId);
  };

  return (
    <Button onClick={handleClick}>
      <i className="fa-solid fa-expand h-4 w-4" />
    </Button>
  );
}
