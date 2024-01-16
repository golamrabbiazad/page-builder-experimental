import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BlockTextarea } from "../ui/textarea";
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
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Trait } from "grapesjs";
import { useEditor } from "@grapesjs/react";
import { cn } from "@/lib/utils";

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  trait: Trait;
}

export function TraitBlockOptions({ trait, ...rest }: StylePropertyFieldProps) {
  const editor = useEditor();

  const handleChange = (value: string) => {
    trait.setValue(value);
  };

  const onChange = (ev: any) => {
    handleChange(ev.target.value);
  };

  const handleButtonClick = () => {
    const command = trait.get("command");
    if (command) {
      typeof command === "string"
        ? editor.runCommand(command)
        : command(editor, trait);
    }
  };

  const type = trait.getType();
  const defValue = trait.getDefault() || trait.attributes.placeholder;
  const value = trait.getValue();
  const valueWithDef = typeof value !== "undefined" ? value : defValue;

  let inputToRender = null;

  switch (type) {
    case "select":
      {
        inputToRender = (
          <Select onValueChange={(ev) => trait.setValue(ev)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue
                className="text-slate-900 dark:text-slate-100"
                placeholder="Select Category"
              />
            </SelectTrigger>
            <SelectContent>
              {trait.getOptions().map((option) => (
                <SelectItem
                  key={trait.getOptionId(option)}
                  value={trait.getOptionId(option)}
                >
                  {trait.getOptionLabel(option)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }
      break;
    case "text":
      {
        inputToRender = (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl no-underline hover:no-underline">
                Block Options
              </AccordionTrigger>
              <AccordionContent>
                <Card className="w-[340px]">
                  <CardHeader>
                    <div className="flex flex-wrap gap-1">
                      <div className="min-w-[137px]">
                        <Select>
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

                      <ToggleGroup variant="outline" type="multiple">
                        <ToggleGroupItem value="bold" aria-label="Toggle bold">
                          <Bold className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="italic"
                          aria-label="Toggle italic"
                        >
                          <Italic className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="underline"
                          aria-label="Toggle underline"
                        >
                          <Underline className="h-4 w-4" />
                        </ToggleGroupItem>

                        <ToggleGroupItem
                          value="italic"
                          aria-label="Toggle italic"
                        >
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

                      <div>
                        <Select>
                          <SelectTrigger id="normal">
                            <SelectValue placeholder="16" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="normal">12</SelectItem>
                            <SelectItem value="heading-1">16</SelectItem>
                            <SelectItem value="heading-2">20</SelectItem>
                            <SelectItem value="heading-3">24</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

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
                    <BlockTextarea placeholder="Integrate. Build. Publish. And done." />
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      }
      break;
  }

  return (
    <div {...rest} className={cn("mb-3 px-1 w-full")}>
      {inputToRender}
    </div>
  );
}
