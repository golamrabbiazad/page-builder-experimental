import { RemoteStorageConfig } from "grapesjs";

export const projectId = 2;
export const projectEndPoint = `http://localhost:5173/api/v1/projects/${projectId}`;

export const remoteStorageConfigs: RemoteStorageConfig = {
  urlLoad: projectEndPoint,
  urlStore: projectEndPoint,

  fetchOptions: (opts) => (opts.method === "POST" ? { method: "PATCH" } : {}),

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
      data,
      pagesHtml,
    };
  },

  onLoad: (result) => result.data,
};
