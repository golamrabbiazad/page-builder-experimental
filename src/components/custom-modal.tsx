import { Icon } from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Box, Fade, Modal, ModalProps } from "@mui/material";

import { MAIN_BG_COLOR, MAIN_TXT_COLOR, cn } from "@/lib/utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  maxHeight: "90vh",
  p: 2,
};

interface CustomModalProps extends Omit<ModalProps, "title"> {
  title: React.ReactNode;
  close: () => void;
}

export function CustomModal({
  children,
  title,
  close,
  ...props
}: CustomModalProps) {
  return (
    <Modal onClose={close} {...props}>
      <Fade in={props.open}>
        <Box
          sx={style}
          className={cn(MAIN_BG_COLOR, MAIN_TXT_COLOR, "rounded")}
        >
          <div className="flex pb-3">
            <div className="flex-grow text-lg">{title}</div>
            <div onClick={close} className="cursor-pointer">
              <Icon size={1} path={mdiClose} />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">{children}</div>
        </Box>
      </Fade>
    </Modal>
  );
}
