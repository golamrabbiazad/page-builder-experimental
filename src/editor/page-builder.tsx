import { useState } from "react";
import { Editor } from "grapesjs";
import GrapesJsEditor, {
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { defaultEditorProps } from "@/editor/config";
import { Topbar } from "@/components/top-bar";
import { AssetModal } from "@/components/assets/asset-modal";
import { ThemeProvider } from "@/providers/theme-providers/theme-context";
import { RightSidebar } from "@/components/rightside-bar";

export default function PageBuilder(props: Partial<EditorProps>) {
  const [showPanel, setShowPanel] = useState(false);

  function onEditor(editor: Editor) {
    editor.Commands.run("core:component-outline");
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="m4yours-ui-theme">
      <GrapesJsEditor onEditor={onEditor} {...defaultEditorProps} {...props}>
        <div className="flex">
          <div className="flex flex-col flex-grow">
            <Topbar showPanel={showPanel} setShowPanel={setShowPanel} />
            <div className="flex">
              <Canvas className="min-h-dvh overflow-hidden" />
              {showPanel && <RightSidebar />}
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
