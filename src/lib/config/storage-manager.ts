import { StorageManagerConfig } from "grapesjs";
import { projectId, remoteStorageConfigs } from "./remote-storage";

export const storageManagerConfig: StorageManagerConfig = {
  type: "remote",
  autoload: false,
  autosave: false,
  stepsBeforeSave: 10,

  options: {
    local: {
      key: `gjsProject-${projectId}`,
      checkLocal: true,
    },

    remote: remoteStorageConfigs,
  },
};
