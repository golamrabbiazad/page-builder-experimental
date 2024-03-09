import { RemoteStorageConfig } from "grapesjs";

export const remoteStorageConfigs: RemoteStorageConfig = {
  // urlStore: newsUrl,
  // urlLoad: newsUrl,
  // headers: {
  //   Authorization: `Bearer ${bearerToken}`,
  //   "Content-Type": "application/json",
  // },
  // credentials: "omit",
  // fetchOptions: (opts) => (opts.method === "GET" ? {} : { method: "PATCH" }),
  // onStore: (data, editor) => {
  //   const pagesHtml = editor.Pages.getAll().map((page) => {
  //     const component = page.getMainComponent();
  //     return {
  //       html: editor.getHtml({ component }),
  //       css: editor.getCss({ component }),
  //     };
  //   });
  //   return {
  //     assets: data.assets,
  //     pages: pagesHtml.map(({ html, css }: { html: string; css: string }) => ({
  //       component: `${html} <style>${css}</style>`,
  //     })),
  //   };
  // },
  // onLoad: (result) => {
  //   return {
  //     pages: [{ component: `<body>${result.description}</body>` }],
  //   };
  // },
};
