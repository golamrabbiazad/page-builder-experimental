import { Flex } from "antd";
import { useState } from "react";
import { Editor } from "grapesjs";
import GrapesJsEditor, {
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { Topbar } from "@/ui/top-bar";
import { AssetModal } from "@/ui/assets/modal";
import { RightSidebar } from "@/ui/rightside-bar";
import { editorConfig } from "@/lib/config";

export default function PageBuilder(props: Partial<EditorProps>) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

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
        <Topbar showDrawer={showDrawer} />
        <Flex
          style={{
            flexDirection: "row",
          }}
        >
          <Canvas
            style={{
              minHeight: "100dvh",
              overflow: "hidden",
              backgroundColor: "black",
            }}
          />
          {open && <RightSidebar />}
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
