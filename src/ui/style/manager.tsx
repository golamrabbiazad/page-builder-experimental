import { Collapse } from "antd";
import { StylesResultProps } from "@grapesjs/react";

import { StylePropertyField } from "./field";

export function StyleManager({
  sectors,
}: Omit<StylesResultProps, "Container">) {
  return (
    <Collapse
      items={sectors.map((sector) => ({
        key: sector.getId(),
        label: sector.getName(),
        children: sector
          .getProperties()
          .map((prop) => <StylePropertyField key={prop.getId()} prop={prop} />),
      }))}
    />
  );
}
