import { Editor } from "grapesjs";
import { getCategories } from "@/api/category-list";
import { getCategoryByName } from "@/api/get-categorydata-by-name";
import { renderDataBasedOnCategory } from "./render-data-by-category";

export async function CategoryPlugin(editor: Editor) {
  editor.Blocks.add("desher-khobor", {
    label: "দেশের খবর",
    content: `<section id="layout-1">Insert Data</section>`,
    media: "🤨",
    category: "খবর",
  });

  const categories = await getCategories();

  editor.DomComponents.addType("layout-1", {
    isComponent: (el) => el.id === "layout-1",

    model: {
      defaults: {
        traits: [
          {
            type: "select",
            label: "Category",
            name: "type",
            options: categories,
          },
        ],
      },

      init() {
        this.on("change:attributes:type", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const categoryName = this.getAttributes().type;
        const data = await getCategoryByName(categoryName);
        this.components(renderDataBasedOnCategory(data));
      },
    },
  });
}
