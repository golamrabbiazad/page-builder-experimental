import "grapesjs/dist/css/grapes.min.css";
import { EditorProps } from "@grapesjs/react";
import grapesjs, { EditorConfig } from "grapesjs";

import { plugins } from "@/lib/plugins";
import { assetsManagerConfig } from "./assets-manager";
import { storageManagerConfig } from "./storage-manager";
import { CSSICONS, TAILWINDCSS_SCRIPT } from "@/lib/external-urls";

export const editorOptions: EditorConfig = {
  storageManager: storageManagerConfig,
  assetManager: assetsManagerConfig,
  undoManager: {
    trackSelection: false,
  },
  selectorManager: {
    componentFirst: true,
  },
  cssIcons: CSSICONS,
  canvas: {
    styles: ["https://rsms.me/", "https://rsms.me/inter/inter.css"],
    scripts: [TAILWINDCSS_SCRIPT],
  },
  commands: {
    defaults: {
      save__data: {
        id: "core:save",
        run: async (editor) => {
          await editor.store();
        },
      },

      load__data: {
        id: "core:load",
        run: async (editor) => {
          await editor.load();
        },
      },
    },
  },
  canvasCss: `
  :root {
    font-family: Inter, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
  }
  @supports (font-variation-settings: normal) {
    :root { font-family: InterVariable, sans-serif; }
  }
  `,
};

export const editorConfig: EditorProps = {
  grapesjs,
  plugins: plugins,
  options: editorOptions,
};
