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

import { ThemeProvider } from "@/providers/theme-providers";

export default function PageBuilder(props: Partial<EditorProps>) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="m4yours-ui-theme">
      <GrapesJsEditor {...defaultEditorProps} {...props}>
        <div className={`flex border-t`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px]" />
            <div className="flex min-h-screen">
              <LeftSidbar />
              <Canvas className="flex-grow w-[1200px] h-screen gjs-custom-editor-canvas" />
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
