import { Editor } from "grapesjs";

const containerIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#ffffff" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    class="lucide lucide-square">
        <rect width="20" height="20" x="3" y="3" rx="2"/>
</svg>
`;

const sectionIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-3"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/></svg>`;

export function layoutPlugin(editor: Editor) {
  editor.Blocks.add("section-block", {
    label: "Section",
    content: `<section class="h-96"></section>`,
    media: sectionIcon,
    category: "Layouts",
  });

  editor.Blocks.add("container-block", {
    label: "Container",
    content: `<div class="h-80 flex flex-grow">
    <div class="min-h-[50px] w-full"></div>
    <div class="min-h-[50px] w-full"></div>
    </div>`,
    media: containerIcon,
    category: "Layouts",
  });

  editor.Blocks.add("div-block", {
    label: "Box",
    content: `<div class="min-h-[50px] w-full"></div>`,
    media: containerIcon,
    category: "Layouts",
  });

  editor.Blocks.add("h1-block", {
    label: "Heading",
    media: "H",
    content: { type: "heading", content: "Hello world" },
    category: "Layouts",
  });

  editor.DomComponents.addType("heading", {
    isComponent: (el) => el.tagName === "h1",

    model: {
      defaults: {
        editable: true,
        draggable: true,
        traits: [
          {
            type: "block", // Type of the trait
          },
        ],
      },
    },
  });

  //   editor.addComponents(`
  //     <div>
  //         <img src="https://path/image" />
  //         <span title="foo">Hello world!!!</span>
  //     </div>
  //   `);

  //   editor.getSelected()!.append(`<div>...`);

  //   editor.DomComponents.addType("div", {
  //     model: {
  //       defaults: {
  //         tagName: "div",
  //         editable: true,
  //         droppable: true,
  //       },
  //     },

  //     view: {
  //       events: {
  //         dblclick: "onActive",
  //         focusout: "onDisable",
  //       },

  //       onActive() {
  //         const { el } = this;
  //         el.contentEditable = "true";
  //       },

  //       onDisable() {
  //         const { el, model } = this;
  //         (el.contentEditable = "false"), model.set("content", el.innerHTML);
  //       },
  //     },
  //   });
}
