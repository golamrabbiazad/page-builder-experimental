import { Editor } from "grapesjs";
import { getCategories } from "@/api/category-list";
import { getCategoryByName } from "@/api/get-categorydata-by-name";
import { renderDataBasedOnCategory } from "./render-data-by-category";

export async function CategoryPlugin(editor: Editor) {
  const categories = await getCategories();

  editor.Blocks.add("template-1-block", {
    label: "Template 1",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-template"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>`,
    category: "Templates",
    content: {
      type: "Template 1",
      components: `
        <div class="grid-col-1 grid gap-2 p-2 md:grid-cols-2 lg:grid-cols-2">
          <div class="mb-4">
            <img src="https://placehold.co/600x400" alt="abc" class="object-cover" />
            <h2 class="mt-2 text-xl font-bold">Title</h2>
            <p class="text-md">Subtitle</p>
            <p class="mt-2 text-sm">21st Jan, 2024</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="w-full md:w-72 lg:w-72">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <p>Test 1</p>
            </div>
            <div class="w-full md:w-72 lg:w-72">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <p>Test 1</p>
            </div>
            <div class="w-full md:w-72 lg:w-72">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <p>Test 1</p>
            </div>
            <div class="w-full md:w-72 lg:w-72">
              <img src="https://placehold.co/300x300" alt="placeholder" />
              <p>Test 1</p>
            </div>
          </div>
        </div>    
        `,
      traits: [
        {
          type: "select",
          label: "Category",
          name: "type",
          options: categories,
        },
      ],
    },
  });

  editor.DomComponents.addType("Template 1", {
    isComponent: (el) => el.tagName === "div",

    model: {
      init() {
        this.on("change:attributes:type", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const categoryName = this.getAttributes().type;
        const data = await getCategoryByName(categoryName);
        this.empty();
        this.components({
          content: renderDataBasedOnCategory(data),
        });
      },
    },
  });
}
