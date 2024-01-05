import { projectId, remoteStorageConfigs } from "./storage-config";

export const storageManagerConfig = {
  type: "remote",
  autoload: true,
  autosave: true,
  stepsBeforeSave: 1,

  options: {
    local: {
      key: `gjsProject-${projectId}`,
      checkLocal: true,
    },

    remote: remoteStorageConfigs,
  },
};
