import ReactServerDOM from "react-dom/server";
import { Template } from "./template";

export const htmlString = ReactServerDOM.renderToString(<Template />);
