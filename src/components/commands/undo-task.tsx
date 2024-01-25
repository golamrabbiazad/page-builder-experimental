import { useEditor } from "@grapesjs/react";
import { MoveLeft } from "lucide-react";
import { Button } from "../ui/button";
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
      variant="ghost"
      onClick={() => toggleCommand(editor, UNDO_COMMAND_ID)}
      type="button"
      disabled={isUndoDisabled()}
    >
      <MoveLeft
        className={cn(
          "h-6 w-4 cursor-pointer",
          Commands.isActive(UNDO_COMMAND_ID) && "text-sky-300",
          isUndoDisabled() && "text-sky-300/50"
        )}
      />
    </Button>
  );
}
