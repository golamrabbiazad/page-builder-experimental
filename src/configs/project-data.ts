import { ProjectData } from "grapesjs";

// if user create new then show the simple components
// if user click the edit button, it will load the existing components from the db.

// If projectData is not defined we might want to load some initial data for the project.
// projectData: projectData || {
//     pages: [
//         {
//           component: ``
//         }
//     ]
//   },

export const projectDataConfig: ProjectData = {
  pages: [
    {
      component: `<h1 class="text-center font-bold text-6xl mt-6">পেজ বিল্ডারে স্বাগতম।</h1>`,
    },
  ],
};
