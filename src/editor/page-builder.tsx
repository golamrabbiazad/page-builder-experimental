import GrapesJsEditor, {
  AssetsProvider,
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { defaultEditorProps } from "@/editor";

import { cn } from "@/lib/utils";
import { MAIN_BG_COLOR, MAIN_BORDER_COLOR, customTheme } from "@/lib/common";
import { ThemeProvider } from "@mui/material";
import { Topbar } from "@/components/top-bar";
import { LeftSidbar } from "@/components/leftside-bar";
import { RightSidebar } from "@/components/rightside-bar";
import { CustomModal } from "@/components/custom-modal";
import { CustomAssetManager } from "@/components/custom-asset-manager";

export default function PageBuilder(props: Partial<EditorProps>) {
  return (
    <ThemeProvider theme={customTheme}>
      <GrapesJsEditor
        className={cn("gjs-custom-editor text-white", MAIN_BG_COLOR)}
        {...defaultEditorProps}
        {...props}
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
      </GrapesJsEditor>
    </ThemeProvider>
  );
}
