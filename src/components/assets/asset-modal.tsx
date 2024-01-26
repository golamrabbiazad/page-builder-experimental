import { Modal } from "antd";

interface AssetModalProps {
  title: React.ReactNode;
  close: () => void;
  open: boolean;
  children: React.ReactElement;
}

export function AssetModal({ title, children, close, open }: AssetModalProps) {
  return (
    <Modal
      title={title}
      open={open}
      onOk={() => close()}
      onCancel={() => close()}
    >
      <div className="grid">{children}</div>
    </Modal>
  );
}
