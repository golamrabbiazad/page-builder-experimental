import { Button, NotificationArgsProps, notification } from "antd";
import { useEditor } from "@grapesjs/react";

type NotificaitonPlacement = NotificationArgsProps["placement"];

export function SaveToast() {
  const editor = useEditor();

  const { Commands } = editor;

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificaitonPlacement) => {
    api.info({
      message: `Hello,`,
      description: "Your changes are saved!",
      placement,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        size="large"
        onClick={() => {
          Commands.run("core:save");
          openNotification("bottomRight");
        }}
      >
        Save
      </Button>
    </>
  );
}
