import { StylesResultProps } from "@grapesjs/react";
import { StylePropertyField } from "./style-property-field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function CustomStyleManager({
  sectors,
}: Omit<StylesResultProps, "Container">) {
  return (
    <div className="gjs-custom-style-manager p-2 text-slate-900 dark:text-slate-100 text-left">
      {sectors.map((sector) => (
        <Accordion
          key={sector.getId()}
          type="single"
          collapsible
          className="w-full"
        >
          <AccordionItem value={sector.getName()}>
            <AccordionTrigger>{sector.getName()}</AccordionTrigger>
            <AccordionContent>
              {sector.getProperties().map((prop) => (
                <StylePropertyField key={prop.getId()} prop={prop} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
