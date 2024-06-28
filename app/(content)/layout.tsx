import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] border"
    >
      <ResizablePanel defaultSize={35} className="h-[calc(100vh-64px)]">
        <div className="h-full container mx-auto py-6">{children}</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <div className="flex h-full items-center justify-center">
          Playground
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
