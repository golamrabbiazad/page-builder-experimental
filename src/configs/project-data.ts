import { getProjectDataById } from "@/api/get-projectdata-by-id";
import { ProjectData } from "grapesjs";

// on create button click new id is created

// on edit button click, grab the id for the page and inject to the project URL.

export const projectDataConfig: ProjectData = await getProjectDataById("1");
