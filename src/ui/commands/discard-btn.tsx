import { useEditor } from "@grapesjs/react";
import { Button, NotificationArgsProps, notification, Popconfirm } from "antd";

type NotificaitonPlacement = NotificationArgsProps["placement"];

export function DiscardButton() {
  const editor = useEditor();

  const { Commands } = editor;

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificaitonPlacement) => {
    api.open({
      message: `Sorry!,`,
      description:
        "Your changes have been discarded. You are now being redirected to the admin page.",
      placement,
      duration: 0,
    });
  };

  const confirm = () => {
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title="Discard changes"
        description="Are you sure to discard this project?"
        onConfirm={confirm}
        onOpenChange={() => console.log("open change")}
      >
        <Button
          type="default"
          block
          size="middle"
          onClick={() => {
            Commands.run("core:canvas-clear");
            openNotification("bottom");
          }}
        >
          Discard
        </Button>
      </Popconfirm>
    </>
  );
}
