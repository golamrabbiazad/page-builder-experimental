import { Editor } from "grapesjs";
import { EditorProps } from "@grapesjs/react";
import basicBlockPlugin from "grapesjs-blocks-basic";

import { layoutPlugin } from "./layouts";
import { ComponentPlugin } from "./components";

export const plugins: EditorProps["plugins"] = [
  (editor: Editor) =>
    basicBlockPlugin(editor, {
      blocks: [
        "column1",
        "column2",
        "column3",
        "column3-7",
        "text",
        "link",
        "image",
        "video",
        "map",
      ],
    }),
  layoutPlugin,
  ComponentPlugin,
];
