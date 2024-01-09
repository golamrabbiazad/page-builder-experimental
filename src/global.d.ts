import grapesjs, { Editor } from "grapesjs";

declare global {
  interface Window {
    grapesjs: typeof grapesjs;
    editor: Editor | undefined;
  }
}
