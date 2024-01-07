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

export function myCustomPlugin(editor: Editor) {
  editor.Blocks.add("container-block", {
    label: "Container",
    content: `<div>Hello</div>`,
    select: true,
    activate: true,
    attributes: {},
    media: containerIcon,
    category: "Custom Layouts",
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
