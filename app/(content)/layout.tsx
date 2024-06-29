"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useRef } from "react";
import sdk from "@stackblitz/sdk";
import { usePathname } from "next/navigation";

function Playground() {
  const pathname = usePathname();
  const ref = useRef(null);

  const projectId = `react-playground-${pathname.slice(1)}`;

  useEffect(() => {
    if (!ref.current) return;
    try {
      sdk.embedProjectId("stackBlitz", projectId, {
        forceEmbedLayout: true,
        openFile: "src/App.jsx",
        view: "default",
        theme: "dark",
        width: "100%",
        height: "100%",
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div ref={ref} id="stackBlitz" />;
}

export default function Layout({ children }: { children: React.ReactNode }) {
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
