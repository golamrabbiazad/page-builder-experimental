import { Button } from "antd";
import { useEditor } from "@grapesjs/react";
import { useCallback, useEffect, useState } from "react";
import { toggleCommand } from "@/lib/utils";

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

  const undoCommandColor = Commands.isActive(REDO_COMMAND_ID)
    ? "limegreen"
    : "";
  const undoDisabledColor = isRedoDisabled() ? "gray" : "";

  const undoButtonStyle = {
    color: undoCommandColor || undoDisabledColor,
  };

  return (
    <Button
      type="text"
      onClick={() => toggleCommand(editor, REDO_COMMAND_ID)}
      disabled={isRedoDisabled()}
    >
      <i
        style={undoButtonStyle}
        className="cursor-pointer fa-solid fa-arrow-right"
      />
    </Button>
  );
}
