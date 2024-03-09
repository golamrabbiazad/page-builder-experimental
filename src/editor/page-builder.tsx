import { Flex } from "antd";
import { Editor } from "grapesjs";
import GrapesJsEditor, {
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { Topbar } from "@/ui/home/topbar/top-bar";
import { AssetModal } from "@/ui/assets/modal";
import { RightSidebar } from "@/ui/home/sidebar/rightside-bar";
import { editorConfig } from "@/lib/config";

export default function PageBuilder(props: Partial<EditorProps>) {
  function onEditor(editor: Editor) {
    editor.Commands.run("core:component-outline");
  }

  return (
    <GrapesJsEditor onEditor={onEditor} {...editorConfig} {...props}>
      <Flex
        style={{
          height: "100dvh",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <Topbar />
        <Flex
          style={{
            flexDirection: "row",
          }}
        >
          <Canvas
            title="Page Builder Canvas"
            style={{
              minHeight: "100dvh",
              overflow: "hidden",
              backgroundColor: "black",
            }}
          />

          <RightSidebar />
        </Flex>
      </Flex>

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
  );
}
