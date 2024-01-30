import { TraitsResultProps } from "@grapesjs/react";
import styles from "./traits.module.css";
import { TraitPropertyField } from "./field";

export function TraitManager({ traits }: Omit<TraitsResultProps, "Container">) {
  return (
    <div className={styles.traitManager__container}>
      {!traits.length ? (
        <p>No properties available</p>
      ) : (
        <>
          {traits.map((trait) => (
            <TraitPropertyField key={trait.getId()} trait={trait} />
          ))}
        </>
      )}
    </div>
  );
}
