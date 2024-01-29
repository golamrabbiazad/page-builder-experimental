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
import { RightSidebar } from "@/components/rightside-bar";
import { Flex } from "antd";

export default function PageBuilder(props: Partial<EditorProps>) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  function onEditor(editor: Editor) {
    editor.Commands.run("core:component-outline");
  }

  return (
    <GrapesJsEditor onEditor={onEditor} {...defaultEditorProps} {...props}>
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
              minHeight: "h-dvh",
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
