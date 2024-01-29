import { Editor } from "grapesjs";
import { getCategories } from "@/lib/data";
import { addDOMComponentType } from "./add-component-type";
import { addBlockTemplate } from "./add-template-block";
import Template1 from "@/lib/plugins/category/assets/first-template.svg";

export async function CategoryPlugin(editor: Editor) {
  const categories = await getCategories();

  // adding type for Template 1-4
  addDOMComponentType("Template 1-4", editor);
  addBlockTemplate({
    blockId: "template-1-4-block",
    editor,
    categories,
    type: "Template 1-4",
    media: Template1,
  });

  // adding type for Template 5-1-2
  addDOMComponentType("Template 5-1-2", editor);
  addBlockTemplate({
    blockId: "template-5-1-2-block",
    editor,
    categories,
    type: "Template 5-1-2",
    media: Template1,
  });

  // adding type for Template 1-3-2-1
  addDOMComponentType("Template 1-3-2-1", editor);
  addBlockTemplate({
    blockId: "template-1-3-2-1-block",
    editor,
    type: "Template 1-3-2-1",
    categories,
    media: Template1,
  });

  // adding type for Template 4-4
  addDOMComponentType("Template 4-4", editor);
  addBlockTemplate({
    blockId: "template-4-4-block",
    editor,
    type: "Template 4-4",
    categories,
    media: Template1,
  });

  // adding type for Template 1-3-1
  addDOMComponentType("Template 1-3-1", editor);
  addBlockTemplate({
    blockId: "template-1-3-1-block",
    editor,
    type: "Template 1-3-1",
    categories,
    media: Template1,
  });

  // adding type for Template 2-1-2
  addDOMComponentType("Template 2-1-2", editor);
  addBlockTemplate({
    blockId: "template-2-12-block",
    editor,
    categories,
    type: "Template 2-1-2",
    media: Template1,
  });

  // adding type for Template 4x1-2
  addDOMComponentType("Template 4x1-2", editor);
  addBlockTemplate({
    blockId: "template-4x-1-2-block",
    editor,
    categories,
    type: "Template 4x1-2",
    media: Template1,
  });
}
