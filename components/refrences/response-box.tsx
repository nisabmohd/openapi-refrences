"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Responses = {
  statusCode: number;
  description?: string;
  body: string;
}[];

type ResponseBoxProps = {
  responses: Responses;
};

// todo take schema also and allow them to see

export default function ResponseBox({ responses }: ResponseBoxProps) {
  const [selectedStatusIndex, setSelectedStatusIndex] = useState(0);
  return (
    <div className="w-[600px] border rounded-lg font-code">
      <div className="flex items-center gap-3.5 border-b px-4 py-2 font-sans">
        {responses.map((response, index) => (
          <span
            onClick={() => setSelectedStatusIndex(index)}
            key={response.statusCode}
            className={cn(
              "text-[13px] py-0.5 text-muted-foreground",
              selectedStatusIndex == index &&
                "border-b-2 border-primary font-medium text-primary"
            )}
          >
            {response.statusCode}
          </span>
        ))}
      </div>
      <div className="prose prose-pre:rounded-none prose-code:font-code prose-pre:bg-background prose-code:bg-background prose-code:text-primary">
        <pre>
          <code>{responses[selectedStatusIndex].body}</code>
        </pre>
      </div>
      <div className="border-t p-2 text-[13px] pl-4">
        {responses[selectedStatusIndex].description ?? "No description"}
      </div>
    </div>
  );
}
