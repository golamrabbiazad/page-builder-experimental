import { TraitsResultProps } from "@grapesjs/react";
import { TraitPropertyField } from "./trait-props-field";

export function CustomTraitManager({
  traits,
}: Omit<TraitsResultProps, "Container">) {
  return (
    <div className="gjs-custom-style-manager text-left mt-3 p-1">
      {!traits.length ? (
        <p className="text-slate-900 dark:text-slate-100">
          No properties available
        </p>
      ) : (
        traits.map((trait) => (
          <TraitPropertyField key={trait.getId()} trait={trait} />
        ))
      )}
    </div>
  );
}
