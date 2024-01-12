import { Asset } from "grapesjs";
import { API_URL } from "./url";

interface ProjectDataProps {
  assets: Asset[];
  pagesHtml: { html: string; css: string }[];
}

/**
 * get the project data { assets, pages } by projectId
 */
export async function getProjectDataById(projectId: string) {
  const res = await fetch(`${API_URL}/projects/${projectId}`);

  if (!res.ok) {
    console.error("Error on fetching the project data.");
  }

  const data: ProjectDataProps = await res.json();

  return {
    assets: data.assets,
    pages: data.pagesHtml.map(({ html, css }) => ({
      component: `
          ${html}
          <style>${css}</style>`,
    })),
  };
}
