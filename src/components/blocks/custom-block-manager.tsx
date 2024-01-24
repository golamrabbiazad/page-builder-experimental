import { BlocksResultProps } from "@grapesjs/react";
import { Card, CardContent, CardFooter } from "../ui/card";
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
  const templateBlocks = Array.from(mapCategoryBlocks).filter(
    ([category]) => category === "Templates"
  );

  const restTemplates = Array.from(mapCategoryBlocks).filter(
    ([category]) => category !== "Templates"
  );

  return (
    <div>
      <ComponentSearch />
      {restTemplates.map(([category, blocks]) => (
        <div key={category}>
          <h2 className="text-xl p-4 bg-categoryName">{category}</h2>

          <div className="flex flex-wrap gap-1 p-2 bg-categoryCardBg cursor-pointer">
            {blocks.map((block) => (
              <Card
                key={block.getLabel()}
                draggable
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop()}
                className="flex flex-col items-center justify-center"
              >
                <CardContent className="p-8 bg-teal-800">
                  <div
                    className="h-8 w-8 mx-auto"
                    dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                  />
                </CardContent>

                <CardFooter className="p-2">
                  <p className="text-center" title={block.getLabel()}>
                    {block.getLabel()}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
      {templateBlocks.map(([category, blocks]) => (
        <div key={category}>
          <h2 className="text-xl p-4 bg-categoryName">{category}</h2>
          <div className="flex gap-2 p-2 flex-wrap bg-categoryCardBg">
            {blocks.map((block) => (
              <div
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop(false)}
                draggable
                key={block.getId()}
              >
                <img
                  draggable="false"
                  src={block.getMedia()!}
                  alt={block.getLabel()}
                  className="block w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
