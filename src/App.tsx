import PageBuilder from "./editor/page-builder";
import { Toaster } from "./components/ui/toaster";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default function App() {
  return (
    <Suspense fallback={<Loader2 className="mr-2 h-4 w-4 animate-spin" />}>
      <div className="flex flex-col text-sm text-white">
        <PageBuilder />
        <Toaster />
      </div>
    </Suspense>
  );
}
