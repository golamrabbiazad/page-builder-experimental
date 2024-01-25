import PageBuilder from "./editor/page-builder";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="flex flex-col text-sm text-white">
      <PageBuilder />
      <Toaster />
    </div>
  );
}
