import { SearchComponent } from "../ui/input";

export function ComponentSearch() {
  return (
    <SearchComponent
      type="text"
      className="placeholder:italic mb-2"
      placeholder="Search for a block (e.g numbers, image wall, ...)"
    />
  );
}
