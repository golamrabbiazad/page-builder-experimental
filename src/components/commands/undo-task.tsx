import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
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

  const undoCommandColor = Commands.isActive(UNDO_COMMAND_ID)
    ? "limegreen"
    : "";
  const undoDisabledColor = isUndoDisabled() ? "gray" : "";

  const undoButtonStyle = {
    color: undoCommandColor || undoDisabledColor,
  };

  return (
    <Button
      type="text"
      onClick={() => toggleCommand(editor, UNDO_COMMAND_ID)}
      disabled={isUndoDisabled()}
    >
      <i
        style={undoButtonStyle}
        className="cursor-pointer fa-solid fa-arrow-left"
      />
    </Button>
  );
}
