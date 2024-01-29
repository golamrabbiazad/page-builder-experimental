import { ConfigProvider, ThemeConfig, theme } from "antd";
import PageBuilder from "./editor/page-builder";

const config: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: "#8CC665",
    borderRadius: 0,
    borderRadiusLG: 0,
    colorText: "#fff",
    colorTextBase: "#000",
  },
  components: {
    Tabs: {
      colorText: "#fff",
      colorBorderBg: "#8CC665",
    },
  },

  algorithm: [theme.darkAlgorithm],
};

export default function App() {
  return (
    <ConfigProvider theme={config}>
      <PageBuilder />
    </ConfigProvider>
  );
}
