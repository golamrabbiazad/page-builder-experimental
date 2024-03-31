import { BlocksResultProps } from "@grapesjs/react";
import { Card, Flex, Image } from "antd";
import styles from "./blocks.module.css";

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
      {restTemplates.map(([category, blocks]) => (
        <div key={category} className={styles.blockCategory__container}>
          <h2 className={styles.blockCategory__header}>{category}</h2>

          <Flex
            wrap="wrap"
            gap="0.4rem"
            style={{
              cursor: "pointer",
              backgroundColor: "#3e3e46",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1rem",
            }}
          >
            {blocks.map((block) => (
              <Card
                key={block.getLabel()}
                draggable
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop()}
                className={styles.blockCategoryCard}
              >
                <div
                  className={styles.blockCategoryCard__icon}
                  dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                />

                <p
                  className={styles.blockCategoryCard__label}
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
          <h3 className={styles.blockTemplate__header}>{category}</h3>
          <div className={styles.blockTemplate__card}>
            {blocks.map((block) => (
              <div
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop(false)}
                draggable
                key={block.getId()}
              >
                <Image
                  preview={false}
                  draggable="false"
                  src={block.getMedia()!}
                  alt={block.getLabel()}
                  className={styles.blockTemplate__image}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
