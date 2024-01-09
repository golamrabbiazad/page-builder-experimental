import { storageManagerConfig } from "@/configs/storage-manager";
import {
  CSSICONS,
  GRAPESJS_CSS,
  INTER_VAR_CSS,
  TAILWINDCSS_SCRIPT,
} from "@/lib/external-urls";
import { plugins } from "@/plugins";
import { EditorProps } from "@grapesjs/react";
import { EditorConfig } from "grapesjs";

// const gjsOptions: EditorConfig = {
/**
 * Initialize the projectData when layout paints the screen.
 */
// projectData: JSON.parse(localStorage.getItem("gjsProject-1")!) || {
//   assets: assetData.map((asset) => asset.src),
//   pages: [
//     {
//       name: "Home page",
//       component: htmlString,
//     },
//     {
//       name: "Index page",
//       component: htmlString,
//     },
//   ],
// },
// };

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
    styles: [INTER_VAR_CSS],
    scripts: [TAILWINDCSS_SCRIPT],
  },
};

export const defaultEditorProps: EditorProps = {
  grapesjs: window.grapesjs,
  plugins: plugins,
  grapesjsCss: GRAPESJS_CSS,
  options: defaultOptions,
};
