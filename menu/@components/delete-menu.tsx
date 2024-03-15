import { MouseEventHandler } from "react";

interface DeleteMenuProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function DeleteMenu({ onClick }: DeleteMenuProps) {
  return (
    <div>
      <button className="btn btn-ghost underline rounded-md" onClick={onClick}>
        Delete Menu
      </button>
    </div>
  );
}
