import { Editor } from "grapesjs";

export function layoutPlugin(editor: Editor) {
  editor.Blocks.add("section-block", {
    label: "Section",
    content: `<section class="h-96"></section>`,
    media: "S",
    category: "Layouts",
  });

  editor.Blocks.add("container-block", {
    label: "Container",
    content: {
      type: "Container",
      classes: [
        "min-h-96",
        "border-dashed",
        "border-blue-400",
        "flex",
        "flex-grow",
      ],
      components: `
        <div class="h-32 border border-dashed w-full"></div>
        <div class="h-32 border border-dashed w-full"></div>
      `,
    },
    media: "C",
    category: "Layouts",
  });

  editor.DomComponents.addType("Container", {
    isComponent: (el) => el.tagName === "div",

    model: {
      defaults: {
        attributes: {},
        traits: [
          {
            type: "select",
            name: "flex-type",
            label: "Flex Type",
            options: [
              { id: "flex-col", name: "flex-col" },
              { id: "flex-row", name: "flex-row" },
            ],
          },
        ],
      },
    },
  });

  editor.Blocks.add("div-block", {
    label: "Box",
    content: `<div class="min-h-32 w-full"></div>`,
    media: "B",
    category: "Layouts",
  });

  editor.Blocks.add("text-block", {
    label: "Text Editor",
    media: "TE",
    content: { type: "text-block-type", content: `<p>Insert some text</p>` },
    category: "Layouts",
    select: true,
  });

  // editor.RichTextEditor.add("hyperlink", {
  //   icon: "&#128279",
  //   attributes: { title: "Hyperlink" },
  //   result(rte) {
  //     const component = editor.getSelected()!;
  //     const selection = rte.selection()!;

  //     if (component.is("link")) {
  //       component.replaceWith(`${component.get("content")}`);
  //     } else {
  //       let range = selection.getRangeAt(0);

  //       let container = range.commonAncestorContainer;
  //       if (container.nodeType == 3) container = container.parentNode!;

  //       if (container.nodeName === "A") {
  //         selection.removeAllRanges();
  //         range = document.createRange();
  //         range.selectNodeContents(container);
  //         selection.addRange(range);
  //         rte.exec("unlink");
  //       } else {
  //         const url = window.prompt("Enter the URL to link to:");
  //         if (url)
  //           rte.insertHTML(
  //             `<a class="link" href="${url}">${rte.selection()}</a>`
  //           );
  //       }
  //     }
  //   },
  // });

  editor.DomComponents.addType("text-block-type", {
    model: {
      defaults: {
        traits: [
          {
            type: "block", // Type of the trait
          },
        ],
      },
    },
  });
}
