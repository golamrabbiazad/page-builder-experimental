import grapesjs, { Editor } from "grapesjs";

declare global {
  interface Window {
    grapesjs: typeof grapesjs;
    editor: Editor | undefined;
  }

  interface Category {
    id: string;
    name: string;
  }
}
