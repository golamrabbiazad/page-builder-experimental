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
    <div className={"w-[400px] gjs-right-sidebar"}>
      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">
            <Pencil />
            <p>Content</p>
          </TabsTrigger>
          <TabsTrigger value="style">
            <Paintbrush />
            <p>Style</p>
          </TabsTrigger>
          <TabsTrigger value="navigator">
            <Layers />
            <p>Navigator</p>
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

        <TabsContent value="navigator">
          <LayersProvider>
            {(props) => <CustomLayerManager {...props} />}
          </LayersProvider>
        </TabsContent>
      </Tabs>
    </div>
  );
}
