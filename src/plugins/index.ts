import { EditorProps } from "@grapesjs/react";
import gjsBlocksFlexbox from "grapesjs-blocks-flexbox";
import gjsBlocksBasic from "grapesjs-blocks-basic";

// custom plugins
import { layoutPlugin } from "./layouts";
import { CategoryPlugin } from "./category";

export const plugins: EditorProps["plugins"] = [
  gjsBlocksFlexbox,
  gjsBlocksBasic,
  layoutPlugin,
  CategoryPlugin,
];
