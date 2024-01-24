import { Editor } from "grapesjs";

export function addDOMComponentType(type: string, editor: Editor) {
  return editor.DomComponents.addType(type, {
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
