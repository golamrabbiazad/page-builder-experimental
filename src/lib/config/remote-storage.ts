import { RemoteStorageConfig } from "grapesjs";

export const newsId = 35;
export const newsUrl = `https://m4yours-page-builder.pages.dev/api/news/${newsId}`;

const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3MDY3MTgwMzQsImV4cCI6MTcwNjg5MDgzNH0.Zo-qLGZkkriD6XCQ-2dD12pn9d6NIfdk0OdkaomfVNA";

export const remoteStorageConfigs: RemoteStorageConfig = {
  urlStore: newsUrl,
  urlLoad: newsUrl,
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
  },

  credentials: "omit",

  fetchOptions: (opts) => (opts.method === "GET" ? {} : { method: "PATCH" }),

  onStore: (_data, editor) => {
    const pagesHtml = editor.Pages.getAll().map((page) => {
      const component = page.getMainComponent();

      return {
        html: editor.getHtml({ component }),
        css: editor.getCss({ component }),
      };
    });

    return {
      title: "page builder coming soon-416",
      subTitle: "string",
      shortDescription: "string",
      description: `${pagesHtml[0].html} <style>${pagesHtml[0].css}</style>`,
      contentType: "PAGEBUILDER",
      featuredImage: "string",
      posterImage: "string",
      isFeatured: true,
      tags: "string",
      categoryIds: [59],
      newsType: "AUDIO_NEWS",
      videoUrl: "string",
      audioUrl: "string",
      liveUrl: "string",
      status: "DRAFT",
      viewCount: 0,
      publishedAt: "2024-01-31T21:15:49.686Z",
      metaTitle: "string",
      metaKeyword: "string",
      metaDescription: "string",
    };
  },
  // ({
  //   assets: result.assets,
  //   pages: result.pagesHtml.map(
  //     ({ html, css }: { html: string; css: string }) => ({
  //       component: `${html} <style>${css}</style>`,
  //     })
  //   ),
  // }),

  onLoad: (result) => {
    return {
      pages: [{ component: `<body>${result.description}</body>` }],
    };
  },
};
