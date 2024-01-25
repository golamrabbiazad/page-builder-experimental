import { Editor } from "grapesjs";

export function toggleCommand(editor: Editor, commandId: string, opts = {}) {
  const { Commands } = editor;
  Commands.isActive(commandId)
    ? Commands.stop(commandId)
    : Commands.run(commandId, opts);
}
