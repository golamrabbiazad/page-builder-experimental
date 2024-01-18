import "grapesjs/dist/css/grapes.min.css";
import { EditorProps } from "@grapesjs/react";
import grapesjs, { EditorConfig } from "grapesjs";

import { plugins } from "@/plugins";
import { CSSICONS, TAILWINDCSS_SCRIPT } from "@/lib/external-urls";
import { assetsManagerConfig, storageManagerConfig } from "@/configs";

export const defaultOptions: EditorConfig = {
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
    styles: [
      // "https://rsms.me/",
      // "https://rsms.me/inter/inter.css",
      "https://fonts.maateen.me/kalpurush/font.css",
    ],
    scripts: [TAILWINDCSS_SCRIPT],
  },
  commands: {
    defaults: {
      save__data: {
        id: "core:save",
        run: (editor) => {
          editor.store();
        },
      },
    },
  },
  canvasCss: `
  body {
    font-family: 'Kalpurush', Inter, sans-serif !important;
  }
  `,
};

export const defaultEditorProps: EditorProps = {
  grapesjs,
  plugins: plugins,
  options: defaultOptions,
};

// :root {
//   font-family: Inter, sans-serif;
//   font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
// }
// @supports (font-variation-settings: normal) {
//   :root { font-family: InterVariable, sans-serif; }
// }
