"use client";

import { PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { all_clients } from "./languages";
import { cn, getColorForMethod, RequestMethod } from "@/lib/utils";
import { useClientContext } from "./client-context";

type RequestBoxProps = {
  method: RequestMethod;
  endPoint: `/${string}`;
  url: string;
  // todo add query params / headers other options too
};

// todo languages and codes
// todo test request workable (with context)
// todo max height

const stringCode = `curl --request GET \\
  --url https://api.example.com/v1/users \\
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'`;

const all_clients_flatted = all_clients
  .map((client) => {
    return client.items.map((lib) => {
      return {
        client: `${client.language}:${lib.name}`,
      };
    });
  })
  .flat();

export function encodeClient(client: { language: string; lib: string }) {
  return `${client.language}:${client.lib}` as const;
}

export function decodeClient(val: string) {
  let firstColonIndex = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] == ":") {
      firstColonIndex = i;
      break;
    }
  }
  const language = val.substring(0, firstColonIndex);
  const lib = val.substring(firstColonIndex + 1);
  return {
    language,
    lib,
  };
}

export default function RequestBox({ endPoint, method, url }: RequestBoxProps) {
  // send to client for testing
  console.debug(url);

  const { selectedClient, setData } = useClientContext();

  function handlePushDataToContext() {
    setData({
      isClientTesterOpen: true,
    });
  }

  return (
    <div className="xl:w-[600px] w-full border rounded-lg font-code">
      <div className="flex items-center justify-between border-b px-3 pr-2 py-1">
        <div className="flex items-center gap-2 text-sm">
          <span
            className={cn("font-semibold uppercase", getColorForMethod(method))}
          >
            {method}
          </span>
          <span className="text-muted-foreground">{endPoint}</span>
        </div>
        <Select
          value={encodeClient(selectedClient)}
          onValueChange={(val) =>
            setData({ selectedClient: decodeClient(val) })
          }
        >
          <SelectTrigger className="min-w-[80px] max-w-fit h-[30px] border-none mx-0 text-[13px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent position="popper" className="font-code mr-8">
            {all_clients_flatted.map((it) => (
              <SelectItem
                className="text-[13px]"
                key={it.client}
                value={it.client}
              >
                {it.client}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="prose prose-pre:rounded-none prose-code:font-code prose-pre:bg-background prose-code:bg-background prose-code:text-primary">
        <pre>
          <code>{stringCode}</code>
        </pre>
      </div>
      <div className="border-t p-2">
        <Button
          onClick={handlePushDataToContext}
          variant="ghost"
          size="sm"
          className="text-xs h-7"
        >
          <PlayIcon className="mr-1.5 w-3 h-3 text-muted-foreground fill-current" />
          Test Request
        </Button>
      </div>
    </div>
  );
}
