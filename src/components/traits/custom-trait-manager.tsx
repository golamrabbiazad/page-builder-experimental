import { TraitsResultProps } from "@grapesjs/react";
import { TraitBlockOptions } from "./block-options";

export function CustomTraitManager({
  traits,
}: Omit<TraitsResultProps, "Container">) {
  console.log(traits);
  return (
    <div className="gjs-custom-style-manager text-left mt-3 p-1">
      {!traits.length ? (
        <p className="text-slate-900 dark:text-slate-100">
          No properties available
        </p>
      ) : (
        traits.map((trait) => (
          // <TraitPropertyField key={trait.getId()} trait={trait} />
          <TraitBlockOptions key={trait.getId()} trait={trait} />
        ))
      )}
    </div>
  );
}
