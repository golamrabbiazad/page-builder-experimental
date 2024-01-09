import { createTheme } from "@mui/material";

export const MAIN_BG_COLOR = "bg-slate-900";

export const MAIN_TXT_COLOR = "text-white";

export const BTN_CLS = "border rounded px-2 py-1 w-full";

export const MAIN_BORDER_COLOR = "border-slate-300";

export const ROUND_BORDER_COLOR = `rounded border ${MAIN_BORDER_COLOR}`;

export const customTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
