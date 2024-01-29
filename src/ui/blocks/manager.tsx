import { BlocksResultProps } from "@grapesjs/react";
import { Card, Flex, Input } from "antd";

export type BlockManagerProps = Pick<
  BlocksResultProps,
  "mapCategoryBlocks" | "dragStart" | "dragStop"
>;

export function BlockManager({
  mapCategoryBlocks,
  dragStart,
  dragStop,
}: BlockManagerProps) {
  const templateBlocks = Array.from(mapCategoryBlocks).filter(
    ([category]) => category === "Templates"
  );

  const restTemplates = Array.from(mapCategoryBlocks).filter(
    ([category]) => category !== "Templates"
  );

  return (
    <div>
      <Input
        style={{
          color: "white",
          backgroundColor: "#1F1F29",
          padding: "0.5rem",
        }}
        type="text"
        variant="borderless"
        className="placeholder:italic"
        placeholder="Search for a block (e.g numbers, image wall, ...)"
      />
      {restTemplates.map(([category, blocks]) => (
        <div style={{ padding: "0.5rem" }} key={category}>
          <h2
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              padding: "0.5rem",
            }}
          >
            {category}
          </h2>

          <Flex
            wrap="wrap"
            gap="0.5rem"
            style={{
              cursor: "pointer",
            }}
          >
            {blocks.map((block) => (
              <Card
                key={block.getLabel()}
                draggable
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "110px",
                }}
              >
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "1.5rem",
                    height: "1.5rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                />

                <p
                  style={{
                    textAlign: "center",
                  }}
                  title={block.getLabel()}
                >
                  {block.getLabel()}
                </p>
              </Card>
            ))}
          </Flex>
        </div>
      ))}
      {templateBlocks.map(([category, blocks]) => (
        <div key={category}>
          <h2
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              padding: "0.5rem",
            }}
          >
            {category}
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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
                  style={{ display: "block", width: "170px" }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
