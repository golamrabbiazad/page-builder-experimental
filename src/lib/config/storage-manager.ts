import { StorageManagerConfig } from "grapesjs";

const projectId = 1;

export const storageManagerConfig: StorageManagerConfig = {
  type: "local",
  autoload: true,
  autosave: false,
  stepsBeforeSave: 10,

  options: {
    local: {
      key: `m4yours-projectId-${projectId}`,
      checkLocal: true,
    },
  },
};
