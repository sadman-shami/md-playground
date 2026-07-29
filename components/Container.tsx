"use client";

import { useState } from "react";

import LiveEditor from "@/components/LiveEditor";
import MarkdownRenderer from "@/components/MarkdownRender";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Container() {
  const [md, setMD] = useState<string>("");
  const onChange = (md: string | undefined) => {
    setMD(md ?? "");
  };
  return (
    <ResizablePanelGroup className="h-full p-4 gap-2" orientation="horizontal">
      <ResizablePanel defaultSize={"60%"}>
        <div className="p-2 h-full col-span-1 bg-foreground/10 backdrop-blur-[5px] rounded-md">
          <div className="bg-foreground h-full rounded-md p-2">
            <LiveEditor md={md} onChange={onChange} />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={"40%"}>
        <div className="p-2 h-full col-span-1 bg-foreground/10 backdrop-blur-[5px] rounded-md">
          <div className="bg-foreground/15 h-full rounded-md p-2 overflow-auto">
            <MarkdownRenderer content={md} />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
