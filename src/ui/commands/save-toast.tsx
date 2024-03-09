import { Button, NotificationArgsProps, notification } from "antd";
import { useEditor } from "@grapesjs/react";

type NotificaitonPlacement = NotificationArgsProps["placement"];

export function SaveToast() {
  const editor = useEditor();

  const { Commands } = editor;

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificaitonPlacement) => {
    api.info({
      message: `Your changes are saved!`,
      placement,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        size="middle"
        onClick={() => {
          Commands.run("core:save");
          openNotification("bottom");
        }}
        aria-label="Save Button"
      >
        Save
      </Button>
    </>
  );
}
