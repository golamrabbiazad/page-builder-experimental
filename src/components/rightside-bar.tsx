import {
  LayersProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { Layers, Paintbrush, Pencil } from "lucide-react";
import { CustomStyleManager } from "./style/custom-style-manager";
import { CustomTraitManager } from "./traits/custom-trait-manager";
import { CustomLayerManager } from "./layers/custom-layer-manager";
import { CustomSelectorManager } from "./selectors/custom-selector-manager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RightSidebar() {
  return (
    <div>
      <Tabs
        defaultValue="content"
        className="h-[540px] overflow-auto scroll-smooth"
      >
        <TabsList className="h-84 flex items-center justify-between">
          <TabsTrigger className="flex flex-col w-1/2" value="content">
            <Pencil />
            <p>Content</p>
          </TabsTrigger>
          <TabsTrigger className="flex flex-col w-1/2" value="style">
            <Paintbrush />
            <p>Style</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
          </TraitsProvider>
        </TabsContent>

        <TabsContent value="style">
          <>
            <SelectorsProvider>
              {(props) => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>
          </>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="navigator">
        <TabsList className="h-84 flex items-center">
          <TabsTrigger className="flex flex-col w-full" value="navigator">
            <Layers />
            <p>Navigator</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="navigator" className="overflow-auto">
          <LayersProvider>
            {(props) => <CustomLayerManager {...props} />}
          </LayersProvider>
        </TabsContent>
      </Tabs>
    </div>
  );
}
