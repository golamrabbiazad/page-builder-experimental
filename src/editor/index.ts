import "grapesjs/dist/css/grapes.min.css";
import { EditorProps } from "@grapesjs/react";
import grapesjs, { EditorConfig } from "grapesjs";

import { plugins } from "@/plugins";
import { projectDataConfig } from "@/configs/project-data";
import { CSSICONS, TAILWINDCSS_SCRIPT } from "@/lib/external-urls";
import { assetsManagerConfig, storageManagerConfig } from "@/configs";

export const defaultOptions: EditorConfig = {
  storageManager: storageManagerConfig,
  assetManager: assetsManagerConfig,
  projectData: projectDataConfig,
  undoManager: {
    trackSelection: false,
  },
  selectorManager: {
    componentFirst: true,
  },
  cssIcons: CSSICONS,
  canvas: {
    styles: [
      "https://rsms.me/",
      "https://rsms.me/inter/inter.css",
      "https://fonts.maateen.me/kalpurush/font.css",
    ],
    scripts: [TAILWINDCSS_SCRIPT],
  },
  commands: {
    defaults: [
      {
        id: "store-data-on-click",
        run: (editor) => {
          editor.store();
        },
      },
    ],
  },
  canvasCss: `
  :root {
    font-family: Inter, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
  }
  @supports (font-variation-settings: normal) {
    :root { font-family: InterVariable, sans-serif; }
  }

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
