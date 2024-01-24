import GrapesJsEditor, {
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { defaultEditorProps } from "@/editor";
import { Topbar } from "@/components/top-bar";
import { RightSidebar } from "@/components/rightside-bar";
import { AssetModal } from "@/components/assets/asset-modal";
import { ThemeProvider } from "@/providers/theme-providers/theme-context";
import { Editor } from "grapesjs";

export default function PageBuilder(props: Partial<EditorProps>) {
  function onEditor(editor: Editor) {
    editor.Commands.run("core:component-outline");
    editor.Panels.removeButton("options", "preview");
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="m4yours-ui-theme">
      <GrapesJsEditor onEditor={onEditor} {...defaultEditorProps} {...props}>
        <div className="flex">
          <div className="flex flex-col flex-grow h-screen overflow-hidden">
            <Topbar />
            <div className="flex">
              <Canvas className="min-h-screen" />
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
