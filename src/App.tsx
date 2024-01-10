import PageBuilder from "./editor/page-builder";

export default function App() {
  return (
    <div className="flex flex-col h-screen text-sm text-white bg-slate-900">
      <div className="flex-grow overflow-hidden">
        <PageBuilder />
      </div>
    </div>
  );
}
