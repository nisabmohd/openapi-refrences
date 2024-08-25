"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { default_clients } from "./languages";
import { cn } from "@/lib/utils";
import { useClientContext } from "./client-context";
import { useEffect } from "react";

export default function ClientConfig() {
  const { selectedClient, baseUrl, token, setData } = useClientContext();

  useEffect(() => {
    // todo remove dummy server urls
    setData({ baseUrl: dummy_server_urls[0].url });
  }, [setData]);

  return (
    <div className="xl:w-[600px] w-full border rounded-lg p-3 flex flex-col gap-2">
      <div>
        <Label className="text-muted-foreground text-[13px]" htmlFor="url">
          Base URL
        </Label>
        <Select
          value={baseUrl!}
          onValueChange={(val) => setData({ baseUrl: val })}
        >
          <SelectTrigger className="h-8 justify-between">
            <SelectValue placeholder="Base URL" />
          </SelectTrigger>
          <SelectContent className="text-sm">
            {/* todo remove dummy server urls */}
            {dummy_server_urls.map((server) => (
              <SelectItem
                className="text-sm"
                key={server.url}
                value={server.url}
              >
                {server.url}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-muted-foreground text-[13px]" htmlFor="token">
          Bearer Authentication
        </Label>
        <Input
          id="token"
          type="password"
          value={token}
          onChange={(e) => setData({ token: e.target.value })}
          placeholder="Token"
          className="h-8"
        />
      </div>
      <div>
        <Label className="text-muted-foreground text-[13px]" htmlFor="clients">
          Client Libraries
        </Label>
        <div id="clients" className="h-20 rounded-md border">
          <div className="flex items-center gap-2 text-sm py-1.5 px-3">
            {default_clients.map((it) => (
              <div
                key={it.language}
                onClick={() =>
                  setData({
                    selectedClient: {
                      language: it.language,
                      lib: it.items[0].name,
                    },
                  })
                }
                className={cn(
                  "px-1 pb-1 text-center cursor-pointer",
                  it.language == selectedClient.language &&
                    "border-b-2 border-primary pb-0.5 font-medium"
                )}
              >
                {it.language}
              </div>
            ))}
          </div>
          {/* todo: more languages add */}
          <div className="border-t text-[13.5px] px-3 py-2.5">{`${selectedClient.language}:${selectedClient.lib}`}</div>
        </div>
      </div>
    </div>
  );
}

const dummy_server_urls = [
  {
    url: "https://api.example.com/v1",
    description: "Production server",
  },
  {
    url: "https://staging-api.example.com/v1",
    description: "Staging server",
  },
];
