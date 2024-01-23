import { Editor } from "grapesjs";
import { getCategories } from "@/api/category-list";

export async function CategoryPlugin(editor: Editor) {
  const categories = await getCategories();

  editor.Blocks.add("template-1-4-block", {
    label: "Template 1-4",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-template"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>`,
    category: "Templates",
    content: {
      type: "Template 1-4",
      tagName: "section",
      classes: ["p-4"],
      content: `
        <div>
          Template 1-4
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
          label: "News Quantity",
          name: "news-quantity",
        },
      ],
    },
  });

  editor.DomComponents.addType("Template 1-4", {
    isComponent: (el) => el.tagName === "section",

    model: {
      defaults: {
        droppable: false,
        editable: false,
      },
      init() {
        this.on("change:attributes:news-type", this.handleUpdateValue);
        this.on("change:attributes:news-quantity", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const componentName = this.attributes.type;
        const categoryType = this.getAttributes()["news-type"];
        const newsQuantity = this.getAttributes()["news-quantity"] || 0;

        this.empty();
        this.components({
          editable: false,
          droppable: false,
          content: `
            <div class="p-8">
              [short_code="${componentName}", categoryType="${categoryType}", size="${newsQuantity}"]
            </div>
          `,
        });
      },

      toHTML() {
        const componentName = this.attributes.type;
        const categoryType = this.getAttributes()["news-type"];
        const newsQuantity = this.getAttributes()["news-quantity"];

        return `
          <div>
            [short_code="${componentName}", categoryType="${categoryType}", size="${newsQuantity}"]
          </div>
        `;
      },
    },
  });

  editor.Blocks.add("template-5-1-2-block", {
    label: "Template 5-1-2",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-template"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>`,
    category: "Templates",
    content: {
      type: "Template 5-1-2",
      tagName: "section",
      classes: ["p-4"],
      content: `
        <div>
          Template 5-1-2
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
          label: "News Quantity",
          name: "news-quantity",
        },
      ],
    },
  });

  editor.DomComponents.addType("Template 5-1-2", {
    isComponent: (el) => el.tagName === "section",

    model: {
      defaults: {
        droppable: false,
        editable: false,
      },
      init() {
        this.on("change:attributes:news-type", this.handleUpdateValue);
        this.on("change:attributes:news-quantity", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const componentName = this.attributes.type;
        const categoryType = this.getAttributes()["news-type"];
        const newsQuantity = this.getAttributes()["news-quantity"] || 0;

        this.empty();
        this.components({
          editable: false,
          droppable: false,
          content: `
            <div class="p-8">
              [short_code="${componentName}", categoryType="${categoryType}", size="${newsQuantity}"]
            </div>
          `,
        });
      },

      toHTML() {
        const componentName = this.attributes.type;
        const categoryType = this.getAttributes()["news-type"];
        const newsQuantity = this.getAttributes()["news-quantity"];

        return `
          <div>
            [short_code="${componentName}", categoryType="${categoryType}", size="${newsQuantity}"]
          </div>
        `;
      },
    },
  });

  editor.Blocks.add("template-1-3-2-1-block", {
    label: "Template 1-3-2-1",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-template"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>`,
    category: "Templates",
    content: {
      type: "Template 1-3-2-1",
      tagName: "section",
      classes: ["p-4"],
      content: `
        <div>
          Template 1-3-2-1
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
          label: "News Quantity",
          name: "news-quantity",
        },
      ],
    },
  });

  editor.DomComponents.addType("Template 1-3-2-1", {
    isComponent: (el) => el.tagName === "section",

    model: {
      defaults: {
        droppable: false,
        editable: false,
      },
      init() {
        this.on("change:attributes:news-type", this.handleUpdateValue);
        this.on("change:attributes:news-quantity", this.handleUpdateValue);
      },

      async handleUpdateValue() {
        const componentName = this.attributes.type;
        const categoryType = this.getAttributes()["news-type"];
        const newsQuantity = this.getAttributes()["news-quantity"] || 0;

        this.empty();
        this.components({
          editable: false,
          droppable: false,
          content: `
            <div class="p-8">
              [short_code="${componentName}", categoryType="${categoryType}", size="${newsQuantity}"]
            </div>
          `,
        });
      },

      toHTML() {
        const componentName = this.attributes.type;
        const categoryType = this.getAttributes()["news-type"];
        const newsQuantity = this.getAttributes()["news-quantity"];

        return `
          <div>
            [short_code="${componentName}", categoryType="${categoryType}", size="${newsQuantity}"]
          </div>
        `;
      },
    },
  });
}
