import { Editor, Plugin } from "grapesjs";

interface RowPluginProps {}

const RowIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="currentColor"    d="M22 20V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20M4 6.5V4H20V6.5H4M4 11V8.5H20V11H4M4 15.5V13H20V15.5H4M4 20V17.5H20V20H4Z" />
</svg>
`;

export const RowBlock: Plugin<RowPluginProps> = (editor: Editor, option) => {
  editor.Blocks.add("row-block", {
    id: "row-block",
    label: "Row",
    category: "Layouts",
    media: RowIcon,
    content: `<div class="gjs-row"></div>`,
  });

  //   editor.Components.addType()
};
