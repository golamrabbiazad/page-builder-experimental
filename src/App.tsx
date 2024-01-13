import PageBuilder from "./editor/page-builder";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="flex flex-col text-sm text-white bg-slate-900">
      <div className="flex-grow overflow-hidden">
        <PageBuilder />
      </div>
      <Toaster />
    </div>
  );
}
