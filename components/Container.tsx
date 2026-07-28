"use client";

import { useEffect, useState } from "react";

import LiveEditor from "@/components/LiveEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { markdownToHtml } from "@/lib/markdown";

export default function Container() {
  const [md, setMD] = useState<string>("");
  const [html, setHtml] = useState<string>("");
  const onChange = (md: string | undefined) => {
    setMD(md ?? "");
  };
  useEffect(() => {
    markdownToHtml(md).then((e) => {
      setHtml(e);
    });
  }, [md]);
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
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted HTML from sanitized source. */}
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
