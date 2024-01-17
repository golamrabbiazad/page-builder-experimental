import { BlockTextarea } from "../../ui/textarea";
import {
  Baseline,
  Bold,
  ChevronLeft,
  Heading1,
  Heading2,
  Heading3,
  ImagePlus,
  Italic,
  Link,
  List,
  PaintBucket,
  Strikethrough,
  Text,
  Underline,
} from "lucide-react";
import { Button } from "../../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Card, CardContent, CardHeader } from "../../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Trait } from "grapesjs";
import { useEditor } from "@grapesjs/react";
import { Input } from "@/components/ui/input";

export function TextType({ trait }: { trait: Trait }) {
  const editor = useEditor();

  // console.log(editor);

  const traitSetValue = (value: string) => {
    trait.setValue(value);
  };

  // add alignment option

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl no-underline hover:no-underline text-slate-900 dark:text-white">
          Block Options
        </AccordionTrigger>
        <AccordionContent>
          <Card className="w-[340px]">
            <CardHeader>
              <div className="flex flex-wrap gap-1">
                <div className="min-w-[137px]">
                  <Select
                    onValueChange={(ev) => {
                      console.log(ev);
                      const component = editor.getSelected();
                      const traits = component?.get("traits");
                      console.log(traits);

                      // traits?.setTarget()
                    }}
                  >
                    <SelectTrigger id="normal">
                      <SelectValue
                        placeholder={
                          <div className="flex items-center gap-2">
                            <Text className="mr-2 h-4 w-4" />
                            <p>Normal</p>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="normal">
                        <div className="flex items-center gap-2">
                          <Text className="mr-2 h-4 w-4" />
                          <p>Normal</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="heading-1">
                        <div className="flex items-center gap-2">
                          <Heading1 className="mr-2 h-4 w-4" />
                          <p>Heading 1</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="heading-2">
                        <div className="flex items-center gap-2">
                          <Heading2 className="mr-2 h-4 w-4" />
                          <p>Heading 2</p>
                        </div>
                      </SelectItem>
                      <SelectItem value="heading-3">
                        <div className="flex items-center gap-2">
                          <Heading3 className="mr-2 h-4 w-4" />
                          <p>Heading 3</p>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <ToggleGroup variant="outline" type="multiple" className="w-32">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="underline"
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4" />
                  </ToggleGroupItem>

                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Strikethrough className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>

                <div className="flex gap-1">
                  <div>
                    <Button variant="outline">
                      <Baseline className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline">
                      <PaintBucket className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Input className="w-14" type="number" placeholder="16" />

                <div className="flex">
                  <div>
                    <Button variant="outline">
                      <List />
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline">
                      <List />
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline">
                      <ChevronLeft />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-1">
                  <div>
                    <Button variant="outline">
                      <ImagePlus />
                    </Button>
                  </div>
                  <div>
                    <Button variant="outline">
                      <Link />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <BlockTextarea
                onChange={(ev) => {
                  editor.getSelected()?.save({
                    content: ev.target.value,
                  });
                }}
                placeholder={
                  editor.getSelected()
                    ? `${editor.getSelected()?.content}`
                    : "Integrate. Build. Publish. And done."
                }
              />
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
