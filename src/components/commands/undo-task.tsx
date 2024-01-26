import { useEditor } from "@grapesjs/react";
import { Button } from "antd";
import { cn } from "@/lib/utils";
import { toggleCommand } from "./toggle-command";
import { useCallback, useEffect, useState } from "react";

export function UndoTask() {
  const editor = useEditor();
  const [, setUpdateCounter] = useState(0);
  const { Commands, UndoManager } = editor;

  const CMD_EVENT = "run stop";
  const UPDATE_EVENT = "update";
  const UNDO_COMMAND_ID = "core:undo";

  const isUndoDisabled = () => !UndoManager.hasUndo();

  const updateCounter = useCallback(
    () => setUpdateCounter((value) => value + 1),
    []
  );

  const onCommand = useCallback(() => {
    UNDO_COMMAND_ID && updateCounter();
  }, [UNDO_COMMAND_ID, updateCounter]);

  useEffect(() => {
    editor.on(CMD_EVENT, onCommand);
    editor.on(UPDATE_EVENT, updateCounter);

    return () => {
      editor.off(CMD_EVENT, onCommand);
      editor.off(UPDATE_EVENT, updateCounter);
    };
  }, [UNDO_COMMAND_ID, onCommand, updateCounter, editor]);

  return (
    <Button
      onClick={() => toggleCommand(editor, UNDO_COMMAND_ID)}
      disabled={isUndoDisabled()}
    >
      <i
        className={cn(
          "h-6 w-4 cursor-pointer fa-solid fa-arrow-left",
          Commands.isActive(UNDO_COMMAND_ID) && "text-sky-300",
          isUndoDisabled() && "text-sky-300/50"
        )}
      />
    </Button>
  );
}
