import { Editor } from "grapesjs";

export function layoutPlugin(editor: Editor) {
  editor.Blocks.add("section-block", {
    label: "Container",
    content: {
      type: "Container",
      tagName: "section",
      classes: ["lg:m-24", "lg:p-6", "md:m-12", "md:p-6"],
      components: `
        <div class="flex justify-center items-center lg:p-10 md:p-10" data-gjs-droppable="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        </div>
      `,
    },
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`,
    category: "Layouts",
  });

  editor.DomComponents.addType("Container", {
    isComponent: (el) => el.tagName === "section",

    model: {
      defaults: {
        attributes: {},
      },
    },
  });

  editor.Blocks.add("div-block", {
    label: "Box",
    content: `<div class="min-h-32 w-full"></div>`,
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    category: "Layouts",
  });

  editor.Blocks.add("text-block", {
    label: "Text Editor",
    media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg>`,
    content: {
      type: "Text Editor",
      tagName: "p",
      content: `Insert some text`,
    },
    category: "Layouts",
    select: true,
  });

  editor.DomComponents.addType("Text Editor", {
    model: {
      defaults: {
        editable: false,
        droppable: false,
        attributes: {
          linkTitle: "",
        },
        style: {
          padding: "25px",
          margin: "25px",
        },

        init() {
          this.listenTo(this, "change:attributes:linkTitle", () =>
            console.log("linkTitle", this.getAttributes()["linkTitle"])
          );
        },
        traits: [
          {
            type: "block", // Type of the trait
          },

          {
            type: "text",
            name: "linkTitle",
            changeProp: false,
            label: "Link Title",
          },
        ],
      },
    },

    view: {
      init() {
        const oldValue = this.model.getAttributes()["linkTitle"];
        console.log("linkTitle", oldValue);
        this.model.addAttributes({ linkTitle: oldValue + " Changed!" });
      },
    },
  });
}
