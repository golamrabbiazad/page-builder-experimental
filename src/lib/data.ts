import { Category, ProjectDataProps } from "./definitions";

export const API_URL = "https://news-portal-api.24onbd.com/api/public";

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories?status=ACTIVE`);

  if (!res.ok) {
    throw new Error("Error on fetching Categories.");
  }
  const {
    data: categories,
  }: {
    data: Category[];
  } = await res.json();

  return categories.map(({ title }) => ({
    id: title,
    name: title,
  }));
}

export async function getCategoryByName(name: string) {
  const res = await fetch(`${API_URL}/categories?name=${name}`);

  if (!res.ok) {
    throw new Error("Error on fetching category data");
  }

  const data = await res.json();

  return data[0];
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
