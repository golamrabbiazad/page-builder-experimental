import { BlocksResultProps } from "@grapesjs/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardTitle } from "../ui/card";
import { ComponentSearch } from "./component-search";
import { Separator } from "../ui/separator";

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
        <Accordion type="single" collapsible className="w-full">
          <Separator className="mt-4 bg-slate-300 dark:bg-slate-200" />
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-slate-900 text-lg hover:no-underline dark:text-slate-100">
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
