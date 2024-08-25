"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";
import useClientMounted from "@/hooks/use-client-mounted";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const mounted = useClientMounted();

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center w-full text-start mt-1.5">
          <SunIcon className="h-[1rem] w-[1rem] mr-3 scale-100 hidden dark:block" />
          <MoonIcon className="dark:hidden h-[1rem] w-[1rem] mr-3" />
          <span className="text-sm capitalize">{theme} theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
