import { Category } from "@/lib/definitions";
import { Editor } from "grapesjs";

interface AddBlockProps {
  blockId: string;
  editor: Editor;
  type: string;
  media: string;
  categories: Omit<Category, "news">[];
}

export function addBlockTemplate({
  blockId,
  editor,
  categories,
  type,
  media,
}: AddBlockProps) {
  return editor.Blocks.add(blockId, {
    label: type,
    media,
    category: "Templates",
    content: {
      type,
      tagName: "section",
      classes: ["p-4"],
      content: `
            <div>
             ${type}
            </div>    
            `,
      traits: [
        {
          type: "select",
          label: "Category",
          name: "news-type",
          options: categories,
        },
        {
          type: "text",
          label: "Quantity",
          name: "news-quantity",
        },
      ],
    },
  });
}
