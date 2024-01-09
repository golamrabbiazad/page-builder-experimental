import { StorageManagerConfig } from "grapesjs";
import { projectId, remoteStorageConfigs } from "./storage-config";

export const storageManagerConfig: StorageManagerConfig = {
  type: "remote",
  autoload: true,
  autosave: true,
  stepsBeforeSave: 3,

  options: {
    local: {
      key: `gjsProject-${projectId}`,
      checkLocal: true,
    },

    remote: remoteStorageConfigs,
  },
};
