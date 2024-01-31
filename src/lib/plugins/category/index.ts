import { Editor } from "grapesjs";
import { getCategories } from "@/lib/data";
import { addDOMComponentType } from "./add-component-type";
import { addBlockTemplate } from "./add-template-block";

import {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
} from "./assets";

interface TemplateBlockProps {
  id: string;
  blockId: string;
  editor?: Editor;
  categories?: {
    id: string;
    title: string;
  }[];
  type: string;
  media: string;
}

const templateBlocks: TemplateBlockProps[] = [
  {
    id: "template-1-4-block",
    blockId: "template-1-4-block",
    type: "Template 1-4",
    media: Template1,
  },
  {
    id: "template-5-1-2-block",
    blockId: "template-5-1-2-block",
    type: "Template 5-1-2",
    media: Template2,
  },
  {
    id: "template-1-3-2-1-block",
    blockId: "template-1-3-2-1-block",
    type: "Template 1-3-2-1",
    media: Template3,
  },
  {
    id: "template-4-4-block",
    blockId: "template-4-4-block",
    type: "Template 4-4",
    media: Template4,
  },
  {
    id: "template-1-3-1-block",
    blockId: "template-1-3-1-block",
    type: "Template 1-3-1",
    media: Template5,
  },
  {
    id: "template-2-1-2-block",
    blockId: "template-2-1-2-block",
    type: "Template 2-1-2",
    media: Template6,
  },
  {
    id: "template-4x-1-2-block",
    blockId: "template-4x-1-2-block",
    type: "Template 4x1-2",
    media: Template7,
  },
];

export async function CategoryPlugin(editor: Editor) {
  const categories = await getCategories();
  templateBlocks.map((temp) => {
    addDOMComponentType(temp.type, editor);
    addBlockTemplate({
      blockId: temp.blockId,
      editor,
      type: temp.type,
      categories,
      media: temp.media,
    });
  });
}
