import { BlocksResultProps } from "@grapesjs/react";
import { Card, Input } from "antd";

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
      <Input
        type="text"
        className="placeholder:italic"
        placeholder="Search for a block (e.g numbers, image wall, ...)"
      />
      {restTemplates.map(([category, blocks]) => (
        <div key={category}>
          <h2 className="text-xl p-4 bg-background">{category}</h2>

          <div className="flex flex-wrap gap-2 cursor-pointer">
            {blocks.map((block) => (
              <Card
                key={block.getLabel()}
                draggable
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop()}
                className="flex flex-col w-[110px] ml-[2px]"
              >
                <div className="p-8 bg-teal-700">
                  <div
                    className="h-8 w-8 mx-auto"
                    dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                  />
                </div>

                <p className="text-center" title={block.getLabel()}>
                  {block.getLabel()}
                </p>
              </Card>
            ))}
          </div>
        </div>
      ))}
      {templateBlocks.map(([category, blocks]) => (
        <div key={category}>
          <h2 className="text-xl p-4 bg-categoryName">{category}</h2>
          <div className="flex gap-2 flex-wrap bg-categoryCardBg">
            {blocks.map((block) => (
              <div
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop(false)}
                draggable
                key={block.getId()}
                className="ml-[2px]"
              >
                <img
                  draggable="false"
                  src={block.getMedia()!}
                  alt={block.getLabel()}
                  className="block w-[170px]"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
