import { Category } from "./definitions";

const categories: Category[] = [
  { id: "sports", title: "Sports" },
  { id: "crimes", title: "Crimes" },
  { id: "entertainments", title: "Entertainments" },
  { id: "politics", title: "Politics" },
];

export async function getCategories() {
  return categories.map(({ id, title }) => ({
    id,
    title,
  }));
}

/**
 * get the project data { assets, pages } by projectId
 */
// export async function getProjectDataById(projectId: string) {
//   const res = await fetch(`${API_URL}/projects/${projectId}`);

//   if (!res.ok) {
//     console.error("Error on fetching the project data.");
//   }

//   const data: ProjectDataProps = await res.json();

//   return {
//     assets: data.assets,
//     pages: data.pagesHtml.map(({ html, css }) => ({
//       component: `
//             ${html}
//             <style>${css}</style>`,
//     })),
//   };
// }
