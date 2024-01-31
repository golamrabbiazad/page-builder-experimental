import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { toggleCommand } from "@/lib/utils";

export function ComponentOutline({ commandId }: { commandId: string }) {
  const editor = useEditor();

  const handleClick = () => {
    toggleCommand(editor, commandId);
  };

  return (
    <Button type="primary" size="small" onClick={handleClick}>
      <i className="fa-solid fa-expand fa-sm" />
    </Button>
  );
}
