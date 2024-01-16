import { BlocksResultProps } from "@grapesjs/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card } from "../ui/card";
import { ComponentSearch } from "./component-search";

export type CustomBlockManagerProps = Pick<
  BlocksResultProps,
  "mapCategoryBlocks" | "dragStart" | "dragStop"
>;

export function CustomBlockManager({
  mapCategoryBlocks,
  dragStart,
  dragStop,
}: CustomBlockManagerProps) {
  return (
    <div className="gjs-custom-block-manager p-6">
      <ComponentSearch />
      {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
        <Accordion key={category} type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg hover:no-underline">
              {category}
            </AccordionTrigger>
            <AccordionContent className="flex gap-2 flex-wrap">
              {blocks.map((block) => (
                <Card
                  key={block.getId()}
                  onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                  onDragEnd={() => dragStop(false)}
                  draggable
                  className="w-[98px] h-[89px] flex flex-col items-center justify-center"
                >
                  <div
                    className="h-6 w-6"
                    dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                  />

                  <p className="text-wrap" title={block.getLabel()}>
                    {block.getLabel()}
                  </p>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
