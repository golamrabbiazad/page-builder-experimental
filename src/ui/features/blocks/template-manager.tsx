import { BlocksResultProps } from "@grapesjs/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card } from "../ui/card";
import { useEditor } from "@grapesjs/react";

type TemplateManagerProps = Pick<BlocksResultProps, "dragStart" | "dragStop">;

export function TemplateManager({ dragStart, dragStop }: TemplateManagerProps) {
  const editor = useEditor();

  const customComponent = editor.Blocks.add("custom-block-id", {
    label: "Custom",
    content: "<h1>CustomComponent</h1>",
    category: "Custom",
  });

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg hover:no-underline text-slate-900 dark:text-white">
            Custom Template
          </AccordionTrigger>

          <AccordionContent>
            <Card
              draggable
              onDragStart={(ev) => dragStart(customComponent, ev.nativeEvent)}
              onDragEnd={() => dragStop(false)}
            >
              <div>
                <p>Image</p>
                <p>content</p>
              </div>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
