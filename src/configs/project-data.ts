import { ProjectData } from "grapesjs";

// on create button click new id is created

// on edit button click, grab the id for the page and inject to the project URL.

export const projectDataConfig: ProjectData = {
  pages: [
    {
      component: `
        <div class="lg:m-24 lg:p-6">
            <div class="flex justify-center items-center lg:p-10" data-gjs-droppable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>
                <path d="M12 8v8"/>
            </svg>
          </div>
        </div>
        `,
    },
  ],
};
