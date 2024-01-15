import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import GrapesJsEditor, {
  Canvas,
  EditorProps,
  ModalProvider,
} from "@grapesjs/react";
import { defaultEditorProps } from "@/editor";
import { Topbar } from "@/components/top-bar";
import { LeftSidbar } from "@/components/leftside-bar";
import { RightSidebar } from "@/components/rightside-bar";
import { AssetModal } from "@/components/assets/asset-modal";
import { ThemeProvider } from "@/providers/theme-providers/theme-context";

export default function PageBuilder(props: Partial<EditorProps>) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="m4yours-ui-theme">
      <GrapesJsEditor {...defaultEditorProps} {...props}>
        <div className={`flex border-t`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px] bg-slate-200 dark:bg-slate-900 border-b border-b-gray-300" />
            <div className="flex">
              <div className="gjs-left-sidebar bg-slate-200 dark:bg-slate-900">
                <LeftSidbar />
              </div>
              <Suspense
                fallback={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              >
                <Canvas className="flex-grow flex flex-col min-h-screen" />
              </Suspense>
              <div className="gjs-right-sidebar bg-slate-200 dark:bg-slate-900">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
        <ModalProvider>
          {({ open, title, content, close }) => (
            <AssetModal
              open={open}
              title={title}
              children={content}
              close={close}
            />
          )}
        </ModalProvider>
      </GrapesJsEditor>
    </ThemeProvider>
  );
}
