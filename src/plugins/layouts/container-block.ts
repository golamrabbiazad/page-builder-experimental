import { Editor } from "grapesjs";
import type { Plugin } from "grapesjs";

const cropSquareIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z" />
    </svg>
`;

interface ContainerPluginProps {}

export const ContainerBlock: Plugin<ContainerPluginProps> = (
  editor: Editor,
  opts: Required<ContainerPluginProps>
) => {
  //   editor.DomComponents.addType("droppable-container", {
  //     model: {
  //       defaults: {
  //         tagName: "div",
  //         droppable: true,
  //         style: { height: "300px", border: "1px solid #ccc" },
  //       },
  //     },
  //   });

  const bm = editor.BlockManager;

  const { category, blocks, stylePrefix, flexGrid, rowHeight, addBasicStyle } =
    opts;

  const toAdd = (name: string) => "";

  const minDim = 1;
  const currentUnit = 1;
  const step = 0.2;

  const resizerBtm: Record<string, any> = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim,
  };

  const resizerRight: Record<string, any> = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    currentUnit,
    minDim,
    step,
  };

  editor.Blocks.add("container-block", {
    id: "container-block",
    label: "Container",
    category: "Layouts",
    media: cropSquareIcon,
    attributes: {
      "data-gjs-draggable": `.${clsRow}`,
      "data-gjs-resizable": resizerRight,
      "data-gjs-name": "Cell",
    },
    content: `<section class="gjs-cell"></section>`,
  });
};
