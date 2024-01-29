import grapesjs, { Editor } from "grapesjs";

declare global {
  interface Window {
    grapesjs: typeof grapesjs;
    editor: Editor | undefined;
  }

  namespace NodeJS {
    interface ProcessEnv extends ProcessEnv {
      API_URL: string;
    }
  }
}
