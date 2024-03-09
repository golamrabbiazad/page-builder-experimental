import { ConfigProvider, ThemeConfig, theme } from "antd";
import PageBuilder from "./editor/page-builder";

const config: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: "#4d842c",
    borderRadius: 0,
    borderRadiusLG: 0,
  },
  components: {
    Tabs: {
      colorPrimary: "#a4d581",
      colorText: "#f2f9ec",
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
