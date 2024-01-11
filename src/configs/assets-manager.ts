import { AssetManagerConfig } from "grapesjs";

export const assetsManagerConfig: AssetManagerConfig = {
  multiUpload: true,
  upload: "http://localhost:5173/api/v1/upload/assets",
};
