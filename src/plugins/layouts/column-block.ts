import { Editor } from "grapesjs";
import type { Plugin } from "grapesjs";

const cropSquareIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z" />
    </svg>
`;

interface ColumnBlockPlugin {}

export const ColumnBlock: Plugin<ColumnBlockPlugin> = (
  editor: Editor
  //   options: OptionsStyle
) => {
  editor.Blocks.add("column-block", {
    id: "column",
    label: "Column",
    category: "Layouts",
    media: cropSquareIcon,
    content: `<div class="gjs-cell"></div>`,
  });
};
