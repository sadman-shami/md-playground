import type React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-2 h-full col-span-1 bg-foreground/10 backdrop-blur-[5px] rounded-md">
    <div className="bg-foreground/15 backdrop-blur-sm h-full rounded-md p-2">
      {children}
    </div>
  </div>
);

export default function Home() {
  return (
    <ResizablePanelGroup className="h-full p-4 gap-2" orientation="horizontal">
      <ResizablePanel defaultSize={"60%"}>
        <Section>Editor</Section>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={"40%"}>
        <Section>Preview</Section>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
