import { Tooltip } from "antd";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

const MenuAction = ({ record }: any) => {
  return (
    <div className="flex items-center justify-end gap-3">
      <Tooltip placement="top" title="Edit">
        <Link href={`/admin/menu/edit/${record?.id}`}>
          <FiEdit className="text-base" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default MenuAction;
