import { Command, CommandInput } from "../ui/command";

export function ComponentSearch() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      {/* <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Basic">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Column</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Text</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Heading</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="My Components">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Layout 1</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Headers</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Footers</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList> */}
    </Command>
  );
}
