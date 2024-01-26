import { useEditor } from "@grapesjs/react";
import { Button } from "antd";
import { cn } from "@/lib/utils";
import { toggleCommand } from "./toggle-command";
import { useCallback, useEffect, useState } from "react";

export function RedoTask() {
  const editor = useEditor();
  const [, setUpdateCounter] = useState(0);
  const { Commands, UndoManager } = editor;

  const CMD_EVENT = "run stop";
  const UPDATE_EVENT = "update";
  const REDO_COMMAND_ID = "core:redo";

  const isRedoDisabled = () => !UndoManager.hasRedo();

  const updateCounter = useCallback(
    () => setUpdateCounter((value) => value + 1),
    []
  );

  const onCommand = useCallback(() => {
    REDO_COMMAND_ID && updateCounter();
  }, [REDO_COMMAND_ID, updateCounter]);

  useEffect(() => {
    editor.on(CMD_EVENT, onCommand);
    editor.on(UPDATE_EVENT, updateCounter);

    return () => {
      editor.off(CMD_EVENT, onCommand);
      editor.off(UPDATE_EVENT, updateCounter);
    };
  }, [REDO_COMMAND_ID, editor, onCommand, updateCounter]);

  return (
    <Button
      onClick={() => toggleCommand(editor, REDO_COMMAND_ID)}
      disabled={isRedoDisabled()}
    >
      <i
        className={cn(
          "h-6 w-4 cursor-pointer fa-solid fa-arrow-right",
          Commands.isActive(REDO_COMMAND_ID) && "text-sky-300",
          isRedoDisabled() && "text-sky-300/50"
        )}
      />
    </Button>
  );
}
