import GjsEditor, {
  AssetsProvider,
  Canvas,
  ModalProvider,
} from "@grapesjs/react";
import grapesjs, { Editor, EditorConfig, usePlugin } from "grapesjs";
import { ThemeProvider, createTheme } from "@mui/material";
import basicBlockPlugin from "grapesjs-blocks-basic";

import { Topbar } from "./components/top-bar";
import { MAIN_BORDER_COLOR } from "./utils";
import { LeftSidbar } from "./components/leftside-bar";
import { CustomModal } from "./components/custom-modal";
import { RightSidebar } from "./components/rightside-bar";

import assetData from "../image-data.json";
import layoutPlugin from "./plugins/layouts";
import { CustomAssetManager } from "./components/custom-asset-manager";

import { htmlString } from "./components/template/render";
import tailwindPlugin from "grapesjs-tailwind";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const gjsOptions: EditorConfig = {
  height: "100vh",
  storageManager: false,
  undoManager: {
    trackSelection: false,
  },
  selectorManager: {
    componentFirst: true,
  },
  projectData: {
    assets: assetData.map((asset) => asset.src),
    pages: [
      {
        name: "Home page",
        component: htmlString,
      },
    ],
  },
};

export default function App() {
  function onEditor(editor: Editor) {
    (window as any).editor = editor;

    editor.StyleManager.addSector(
      "layout-sector",
      {
        name: "Customize Layout",
      },
      { at: 0 }
    );

    editor.StyleManager.addProperty("layout-sector", {
      label: "Number of Column",
      default: "1",
      property: "column",
      type: "select",
      options: [
        { id: "2", label: "2 Column" },
        { id: "3", label: "3 Column" },
      ],
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <GjsEditor
        className="gjs-custom-editor text-white bg-slate-900 "
        grapesjs={grapesjs}
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
        onEditor={onEditor}
        plugins={[
          (editor) =>
            basicBlockPlugin(editor, {
              blocks: [
                "column1",
                "column2",
                "column3",
                "column3-7",
                "text",
                "link",
                "image",
                "video",
                "map",
              ],
              labelColumn1: "Column",
            }),
          usePlugin(layoutPlugin),
          usePlugin(tailwindPlugin),
        ]}
      >
        <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px]" />

            <div className="flex">
              <LeftSidbar
                className={`gjs-column-r w-[400px] ${MAIN_BORDER_COLOR}`}
              />
              <Canvas className="flex-grow gjs-custom-editor-canvas" />

              <RightSidebar
                className={`gjs-column-r w-[400px] ${MAIN_BORDER_COLOR}`}
              />
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
