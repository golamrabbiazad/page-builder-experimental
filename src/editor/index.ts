import "grapesjs/dist/css/grapes.min.css";
import { storageManagerConfig } from "@/configs/storage-manager";
import { CSSICONS, TAILWINDCSS_SCRIPT } from "@/lib/external-urls";
import { plugins } from "@/plugins";
import { EditorProps } from "@grapesjs/react";
import grapesjs, { EditorConfig } from "grapesjs";

export const defaultOptions: EditorConfig = {
  assetManager: {
    assets: [
      "https://via.placeholder.com/350x250/78c5d6/fff",
      "https://via.placeholder.com/350x250/459ba8/fff",
      "https://via.placeholder.com/350x250/79c267/fff",
      "https://via.placeholder.com/350x250/c5d647/fff",
      "https://via.placeholder.com/350x250/f28c33/fff",
      "https://via.placeholder.com/350x250/e868a2/fff",
      "https://via.placeholder.com/350x250/cc4360/fff",
      "https://via.placeholder.com/350x250/78c5d6/eee",
      "https://via.placeholder.com/350x250/459ba8/eee",
      "https://via.placeholder.com/350x250/79c267/eee",
      "https://via.placeholder.com/350x250/c5d647/eee",
      "https://via.placeholder.com/350x250/f28c33/eee",
      "https://via.placeholder.com/350x250/e868a2/eee",
      "https://via.placeholder.com/350x250/cc4360/eee",
    ],
  },
  storageManager: storageManagerConfig,
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
