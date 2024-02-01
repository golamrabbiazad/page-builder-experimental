import { StorageManagerConfig } from "grapesjs";
import { newsId, remoteStorageConfigs } from "./remote-storage";

export const storageManagerConfig: StorageManagerConfig = {
  type: "remote",
  autoload: false,
  autosave: false,
  stepsBeforeSave: 10,

  options: {
    local: {
      key: `gjsProject-${newsId}`,
      checkLocal: true,
    },

    remote: remoteStorageConfigs,
  },
};
