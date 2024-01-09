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

const h1HeadingIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>
`;

export function layoutPlugin(editor: Editor) {
  editor.Blocks.add("section-block", {
    label: "Section",
    content: `<section class="h-96"></section>`,
    select: true,
    activate: true,
    attributes: {},
    media: sectionIcon,
    category: "Layouts",
  });

  editor.DomComponents.addType("section", {
    isComponent: (el) => el.tagName === "section",

    model: {
      defaults: {
        tagName: "Section",
        droppable: true,
        resizable: true,
      },
    },
  });

  editor.Blocks.add("container-block", {
    label: "Container",
    content: `<div class="h-80 flex flex-grow">
    <div class="min-h-[50px] w-full"></div>
    <div class="min-h-[50px] w-full"></div>
    </div>`,
    select: true,
    activate: true,
    attributes: {},
    media: containerIcon,
    category: "Layouts",
  });

  editor.DomComponents.addType("container-type", {
    isComponent: (el) => el.tagName === "div",

    model: {
      defaults: {
        tagName: "div",
        droppable: true,
        resizable: true,
      },
    },
  });

  editor.Blocks.add("div-block", {
    label: "Box",
    content: `<div class="min-h-[50px] w-full"></div>`,
    select: true,
    activate: true,
    attributes: {},
    media: containerIcon,
    category: "Layouts",
  });

  editor.DomComponents.addType("container-type", {
    isComponent: (el) => el.tagName === "div",

    model: {
      defaults: {
        tagName: "div",
        droppable: true,
      },
    },
  });

  editor.Blocks.add("h1-block", {
    label: "Heading",
    content: "<h1>Put your title here</h1>",
    category: "Basic",
    attributes: {
      title: "Insert h1 block",
    },
    select: true,
    activate: true,
    media: h1HeadingIcon,
  });

  editor.DomComponents.addType("h1", {
    isComponent: (el) => el.tagName === "h1",

    model: {
      defaults: {
        tagName: "H1",
        draggable: `section`,
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
