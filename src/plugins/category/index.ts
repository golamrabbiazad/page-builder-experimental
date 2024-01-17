import { Editor } from "grapesjs";
import { getCategories } from "@/api/category-list";
import { getCategoryByName } from "@/api/get-categorydata-by-name";
import { renderDataBasedOnCategory } from "./render-data-by-category";

export async function CategoryPlugin(editor: Editor) {
  const categories = await getCategories();

  editor.Blocks.add("layout-1", {
    label: "দেশের খবর",
    media: "🤨",
    category: "Templates",
    content: {
      tagName: "section",
      type: "layout-1",
      components: `
        <h2 class="ml-2 text-3xl font-bold">Category Name</h2>
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

  editor.DomComponents.addType("layout-1", {
    isComponent: (el) => el.tagName === "section",

    model: {
      defaults: {
        editable: true,
        attributes: {
          "data-slug": "news",
          limit: "5",
          style: "grid",
        },
      },

      init() {
        this.on("change:attributes:type", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const categoryName = this.getAttributes().type;
        const data = await getCategoryByName(categoryName);
        this.empty();
        this.components({
          components: renderDataBasedOnCategory(data),
        });

        // another option is that to inject in view layer.
        // because of this HTML data can't be exported.
        // this.view?.el.append(renderDataBasedOnCategory(data))
      },
    },
  });
}
