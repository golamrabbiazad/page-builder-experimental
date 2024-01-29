import { EditorProps } from "@grapesjs/react";
import gjsBlocksBasic from "grapesjs-blocks-basic";

// custom plugins
import { layoutPlugin } from "./layouts";
import { CategoryPlugin } from "./category";

export const plugins: EditorProps["plugins"] = [
  layoutPlugin,
  gjsBlocksBasic,
  CategoryPlugin,
];
