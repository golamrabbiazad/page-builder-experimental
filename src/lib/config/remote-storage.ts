import { RemoteStorageConfig } from "grapesjs";

export const projectId = 1;
export const projectEndPoint = `http://localhost:5173/api/v1/projects/${projectId}`;

export const remoteStorageConfigs: RemoteStorageConfig = {
  urlStore: projectEndPoint,

  fetchOptions: (opts) => (opts.method === "POST" ? { method: "PATCH" } : {}),

  onLoad: (data, editor) => {
    console.log(data);

    console.log(editor);

    const projectData = editor.loadProjectData({
      id: "1",
      pagesHtml: [
        {
          html: "<body></body>",
          css: "* { box-sizing: border-box; } body {margin: 0;}",
        },
      ],
      assets: [],
    });

    return { projectData };
  },

  onStore: (data, editor) => {
    const pagesHtml = editor.Pages.getAll().map((page) => {
      const component = page.getMainComponent();

      return {
        html: editor.getHtml({ component }),
        css: editor.getCss({ component }),
      };
    });

    return {
      id: projectId,
      assets: data.assets,
      pagesHtml,
    };
  },
};
