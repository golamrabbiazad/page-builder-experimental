import { StylesResultProps } from "@grapesjs/react";
import { StylePropertyField } from "./style-property-field";
import { Collapse } from "antd";

export function CustomStyleManager({
  sectors,
}: Omit<StylesResultProps, "Container">) {
  return (
    <div className="p-2 text-slate-900 dark:text-slate-100">
      {sectors.map((sector) => (
        <Collapse
          className="w-full"
          items={[
            {
              key: sector.getId(),
              label: sector.getName(),
              children: sector
                .getProperties()
                .map((prop) => (
                  <StylePropertyField key={prop.getId()} prop={prop} />
                )),
            },
          ]}
        />
      ))}
    </div>
  );
}
