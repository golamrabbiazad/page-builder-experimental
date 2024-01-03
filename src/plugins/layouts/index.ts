import type { Editor, BlockProperties, Plugin } from "grapesjs";

function loadBlocks(editor: Editor, opts: Required<PluginOptions>) {
  const bm = editor.BlockManager;
  const { category, blocks, stylePrefix, flexGrid, rowHeight, addBasicStyle } =
    opts;

  console.log(
    category,
    blocks,
    stylePrefix,
    flexGrid,
    rowHeight,
    addBasicStyle
  );

  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow = flexGrid
    ? `.${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: wrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }`
    : `
    .${clsRow} {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
        width: 100%;
        display: block;
      }
    }`;

  const styleClm = flexGrid
    ? `
    .${clsCell} {
      min-height: ${rowHeight}px;
      flex-grow: 1;
      flex-basis: 100%;
    }`
    : `
    .${clsCell} {
      width: 100%;
      display: table-cell;
      height: ${rowHeight}px;
    }`;

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
    "data-gjs-droppable": `.${clsCell}`,
    "data-gjs-resizable": resizerBtm,
    "data-gjs-name": "Container",
  };

  const colAttr: Record<string, any> = {
    class: clsCell,
    "data-gjs-draggable": `.${clsRow}`,
    "data-gjs-resizable": resizerRight,
    "data-gjs-name": "Column",
  };

  if (flexGrid) {
    colAttr["data-gjs-unstylable"] = ["width"];
    colAttr["data-gjs-stylable-require"] = ["flex-basis"];
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

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
    }

    return result.length ? ` ${result.join(" ")}` : "";
  };

  const toAdd = (name: string) => blocks.indexOf(name) >= 0;
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);
  const commonBlockProps: Partial<BlockProperties> = {
    category,
    select: true,
  };

  toAdd("container") &&
    bm.add("container", {
      ...commonBlockProps,
      label: opts.container,
      media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
      </svg>`,
      content: `<section ${attrsRow}></section>
      ${
        addBasicStyle
          ? `<style>
          ${styleRow}
        </style>`
          : ""
      }`,
    });

  toAdd("column") &&
    bm.add("column", {
      ...commonBlockProps,
      label: opts.column,
      media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
      </svg>`,
      content: `<div ${attrsCell}></div>
      ${
        addBasicStyle
          ? `<style>
          ${styleClm}
        </style>`
          : ""
      }`,
    });

  toAdd("row") &&
    bm.add("row", {
      ...commonBlockProps,
      label: opts.row,
      media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
      </svg>`,
      content: `<div ${attrsRow}></div>
      ${
        addBasicStyle
          ? `<style>
          ${styleRow}
        </style>`
          : ""
      }`,
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

  /**
   * Initial row height
   * @default 75
   */
  rowHeight?: number;
};

const layoutPlugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const config: Required<PluginOptions> = {
    blocks: ["container", "column", "row"],
    flexGrid: false,
    stylePrefix: "gjs-",
    addBasicStyle: true,
    category: "Layouts",
    container: "Container",
    column: "Column",
    row: "Row",
    rowHeight: 75,
    ...opts,
  };

  loadBlocks(editor, config);
};

export default layoutPlugin;
