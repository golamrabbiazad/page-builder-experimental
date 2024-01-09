// import { Editor } from "grapesjs";
// import { useState } from "react";
import PageBuilder from "./editor/page-builder";

export default function App() {
  // const [ready, setReady] = useState<Editor>();
  // const [editor, setEditor] = useState<Editor>();

  // if (!ready) {
  //   console.log("Editor Not Ready");
  // }

  // window.editor = editor;

  // PageBuilder props onEditor={setEditor} onReady={setReady}

  return (
    <div className="flex flex-col h-screen text-sm text-white bg-slate-900">
      <div className="flex-grow overflow-hidden">
        <PageBuilder />
      </div>
    </div>
  );
}
