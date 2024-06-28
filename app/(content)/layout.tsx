"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useRef, useState } from "react";
import sdk from "@stackblitz/sdk";

function Playground() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    sdk.embedProjectId("stackBlitz", "welcome-to-react-tutorial", {
      forceEmbedLayout: true,
      openFile: "src/App.jsx",
      view: "default",
      theme: "dark",
      width: "100%",
      height: "100%",
    });
  }, []);

  return <div ref={ref} id="stackBlitz" />;
}

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] border border-gray-600"
    >
      <ResizablePanel defaultSize={30} className="h-[calc(100vh-64px)]">
        <div className="h-full container mx-auto py-6">{children}</div>
      </ResizablePanel>
      <ResizableHandle className="bg-border" />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center">
          <Playground />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
