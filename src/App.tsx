import GjsEditor, {
  AssetsProvider,
  Canvas,
  ModalProvider,
} from "@grapesjs/react";
import grapesjs, { Editor, EditorConfig } from "grapesjs";
import { ThemeProvider, createTheme } from "@mui/material";

import { Topbar } from "@/components/top-bar";
import { MAIN_BORDER_COLOR } from "@/lib/utils";
import { LeftSidbar } from "@/components/leftside-bar";
import { CustomModal } from "@/components/custom-modal";
import { RightSidebar } from "@/components/rightside-bar";
import { CustomAssetManager } from "@/components/custom-asset-manager";

// import assetData from "../image-data.json";

// import { htmlString } from "./components/template/render";
import { storageManagerConfig } from "./configs/storage-manager";
import { editorPluginConfig } from "./configs/editor-plugins";
import {
  CSSICONS,
  GRAPESJS_CSS,
  INTER_VAR_CSS,
  TAILWINDCSS_SCRIPT,
} from "./lib/external-urls";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const gjsOptions: EditorConfig = {
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
};

export default function App() {
  function onEditor(editor: Editor) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).editor = editor;
  }

  return (
    <ThemeProvider theme={theme}>
      <GjsEditor
        className="gjs-custom-editor text-white bg-slate-900"
        grapesjs={grapesjs}
        grapesjsCss={GRAPESJS_CSS}
        options={gjsOptions}
        onEditor={onEditor}
        plugins={editorPluginConfig}
      >
        <div className={`flex border-t ${MAIN_BORDER_COLOR}`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px]" />

            <div className="flex h-screen">
              <LeftSidbar className={`w-96 ${MAIN_BORDER_COLOR}`} />
              <Canvas className="flex-grow gjs-custom-editor-canvas" />

              <RightSidebar className={`w-96 ${MAIN_BORDER_COLOR}`} />
            </div>
          </div>
        </div>
        <ModalProvider>
          {({ open, title, content, close }) => (
            <CustomModal
              open={open}
              title={title}
              children={content}
              close={close}
            />
          )}
        </ModalProvider>
        <AssetsProvider>
          {({ assets, select, close, Container }) => (
            <Container>
              <CustomAssetManager
                assets={assets}
                select={select}
                close={close}
              />
            </Container>
          )}
        </AssetsProvider>
      </GjsEditor>
    </ThemeProvider>
  );
}
