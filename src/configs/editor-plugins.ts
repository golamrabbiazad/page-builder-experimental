import { myCustomPlugin } from "@/plugins/custom-plugin";
import layoutPlugin from "@/plugins/layouts";

import { Editor } from "grapesjs";
import basicBlockPlugin from "grapesjs-blocks-basic";

export const editorPluginConfig = [
  (editor: Editor) =>
    basicBlockPlugin(editor, {
      blocks: [
        "column1",
        "column2",
        "column3",
        "column3-7",
        "link",
        "image",
        "video",
        "map",
      ],
    }),
  layoutPlugin,
  myCustomPlugin,
];
