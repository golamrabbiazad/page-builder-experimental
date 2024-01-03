import { StylesResultProps } from "@grapesjs/react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";
import { MAIN_BG_COLOR } from "../utils";
import { StylePropertyField } from "./style-property-field";

const accordionIcon = <Icon path={mdiMenuDown} size={0.7} />;

export function CustomStyleManager({
  sectors,
}: Omit<StylesResultProps, "Container">) {
  return (
    <div className="gjs-custom-style-manager text-left">
      {sectors.map((sector) => (
        <Accordion key={sector.getId()} disableGutters>
          <AccordionSummary
            className="!bg-slate-800"
            expandIcon={accordionIcon}
          >
            {sector.getName()}
          </AccordionSummary>
          <AccordionDetails className={`${MAIN_BG_COLOR} flex flex-wrap`}>
            {sector.getProperties().map((prop) => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
