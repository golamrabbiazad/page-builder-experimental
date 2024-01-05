import type { Editor, BlockProperties, Plugin } from "grapesjs";

function loadBlocks(editor: Editor, opts: Required<PluginOptions>) {
  const bm = editor.BlockManager;
  const { category, blocks, stylePrefix, flexGrid } = opts;

  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const clsText = `${stylePrefix}text`;

  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
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

  // Flex elements do not react on width style change therefore I use
  // 'flex-basis' as keyWidth for the resizer on columns
  if (flexGrid) {
    resizerRight.keyWidth = "flex-basis";
  }

  const rowAttr = {
    class: clsRow,
    "data-gjs-droppable": `.${clsCell} .${clsText} ${clsRow}`,
    "data-gjs-resizable": resizerBtm,
    "data-gjs-name": "Row",
  };

  const columnAttr: Record<string, any> = {
    class: clsCell,
    "data-gjs-draggable": `.${clsRow}`,
    "data-gjs-resizable": resizerRight,
    "data-gjs-name": "Column",
  };

  if (flexGrid) {
    columnAttr["data-gjs-unstylable"] = ["width"];
    columnAttr["data-gjs-stylable-require"] = ["flex-basis"];
  }

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on(
    "selector:add",
    (selector) =>
      privateCls.indexOf(selector.getFullName()) >= 0 &&
      selector.set("private", 1)
  );

  const attrsToString = (attrs: Record<string, any>) => {
    const result = [];

    for (const key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
    }

    return result.length ? ` ${result.join(" ")}` : "";
  };

  const toAdd = (name: string) => blocks.indexOf(name) >= 0;
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(columnAttr);

  console.log(attrsRow);

  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };

  toAdd("container") &&
    bm.add("container", {
      ...commonBlockProps,
      label: opts.container,
      activate: true,
      media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
      </svg>`,
      content: `<section ${attrsRow}>
      <div ${attrsCell}></div>
    </section>`,
    });

  toAdd("text") &&
    bm.add("text", {
      ...commonBlockProps,
      label: opts.text,
      activate: true,
      media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
      </svg>`,
      content: `<p>Insert your text here</p>`,
    });

  toAdd("column") &&
    bm.add("column", {
      ...commonBlockProps,
      label: opts.column,
      activate: true,
      media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
      </svg>`,
      content: `<div data-gjs-type="cmp-Y"></div>`,
    });

  editor.Components.addType("el-X", {
    model: {
      defaults: {
        name: "Column",
        draggable: "el-Y",
      },
    },
  });
}

type PluginOptions = {
  /**
   * Which blocks to add.
   * @default ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map']
   */
  blocks?: string[];

  /**
   * Make use of flexbox for the grid
   * @default false
   */
  flexGrid?: boolean;

  /**
   * Classes prefix
   * @default 'gjs-'
   */
  stylePrefix?: string;

  /**
   * Use basic CSS for blocks
   * @default true
   */
  addBasicStyle?: boolean;

  /**
   * Blocks category name
   * @default 'Layout'
   */
  category?: string;

  /**
   * Container label
   * @default 'container'
   */
  container?: string;

  /**
   * 2 Columns label
   * @default 'column'
   */
  column?: string;

  /**
   * 3 Columns label
   * @default '3 Columns'
   */
  row?: string;

  text?: string;

  /**
   * Initial row height
   * @default 75
   */
  rowHeight?: number;
};

const layoutPlugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const config: Required<PluginOptions> = {
    blocks: ["container", "column", "row", "text"],
    flexGrid: false,
    stylePrefix: "gjs-",
    addBasicStyle: true,
    category: "Layouts",
    container: "Container",
    column: "Column",
    text: "Text",
    row: "Row",
    rowHeight: 75,
    ...opts,
  };

  loadBlocks(editor, config);
};

export default layoutPlugin;
