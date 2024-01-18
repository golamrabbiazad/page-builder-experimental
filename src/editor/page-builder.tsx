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
import { ThemeProvider } from "@/providers/theme-providers/theme-context";
import { Editor } from "grapesjs";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function PageBuilder(props: Partial<EditorProps>) {
  function onEditor(editor: Editor) {
    editor.Commands.run("core:component-outline");

    editor.RichTextEditor.add("indent", {
      icon: "&#8594;",
      attributes: { title: "Indent" },
      result: (rte) => rte.exec("indent"),
    });

    editor.RichTextEditor.add("outdent", {
      icon: "&#8592;",
      attributes: { title: "Outdent" },
      result: (rte) => rte.exec("outdent"),
    });
  }
  return (
    <ThemeProvider defaultTheme="system" storageKey="m4yours-ui-theme">
      <GrapesJsEditor onEditor={onEditor} {...defaultEditorProps} {...props}>
        <div className="flex h-screen">
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px] bg-slate-200 dark:bg-slate-900 border-b border-b-gray-300" />
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={20} className="gjs-left-sidebar">
                <div className="min-h-screen bg-slate-200 dark:bg-slate-900">
                  <LeftSidbar />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />

              <ResizablePanel defaultSize={60}>
                <Canvas className="flex-grow flex flex-col" />
              </ResizablePanel>

              <ResizableHandle withHandle />

              <ResizablePanel defaultSize={20} className="gjs-right-sidebar ">
                <div className="min-h-screen bg-slate-200 dark:bg-slate-900">
                  <RightSidebar />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
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
