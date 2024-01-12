import GrapesJsEditor, {
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { defaultEditorProps } from "@/editor";
import { Topbar } from "@/components/top-bar";
import { LeftSidbar } from "@/components/leftside-bar";
import { RightSidebar } from "@/components/rightside-bar";
import { AssetModal } from "@/components/assets/asset-modal";

import { cn } from "@/lib/utils";
import { MAIN_BG_COLOR, MAIN_BORDER_COLOR } from "@/lib/common";
import { ThemeProvider } from "@/providers/theme-providers";

export default function PageBuilder(props: Partial<EditorProps>) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="m4yours-ui-theme">
      <GrapesJsEditor
        className={cn("gjs-custom-editor text-white", MAIN_BG_COLOR)}
        {...defaultEditorProps}
        {...props}
      >
        <div className={`flex border-t ${MAIN_BORDER_COLOR}`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px]" />

            <div className="flex h-screen">
              <LeftSidbar
                className={`w-96 gjs-left-sidebar ${MAIN_BORDER_COLOR}`}
              />
              <Canvas className="gjs-custom-editor-canvas overflow-auto" />
              <RightSidebar />
            </div>
          </div>
        </div>
        <ModalProvider>
          {({ open, title, content, close }) => (
            <AssetModal
              open={open}
              title={title}
              children={content}
              close={close}
            />
          )}
        </ModalProvider>
      </GrapesJsEditor>
    </ThemeProvider>
  );
}
