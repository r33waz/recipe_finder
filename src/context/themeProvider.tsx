"use client";
import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            >
              <path
                fill="currentColor"
                d="M6 14.77q.97 0 1.777.524q.808.525 1.187 1.42l.442 1.055h1.144q.704 0 1.192.507t.489 1.224q0 .723-.504 1.227t-1.227.504H6q-1.342 0-2.286-.945T2.769 18q0-1.367.945-2.299T6 14.769m7.314-2.083q1.461 1.462 3.28 2.244t3.866.9q.217.014.381.114q.165.1.276.262t.124.357q.011.196-.083.389q-1.01 2.294-3.215 3.646T13.248 22q.473-.516.728-1.159t.255-1.341q0-1.508-1.015-2.582t-2.472-1.112q-.646-1.387-1.928-2.212T6 12.77q-.512 0-1.014.104q-.503.104-.986.312v-.308q.012-2.621 1.345-4.752q1.334-2.13 3.678-3.252q.193-.094.401-.073t.37.113t.274.267t.126.391q.125 2.054.879 3.842q.754 1.787 2.24 3.274"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            >
              <path
                fill="currentColor"
                d="M11.5 5.423V2.039h1v3.384zm5.496 2.289l-.682-.683l2.357-2.452l.727.733zm1.581 4.788v-1h3.385v1zM11.5 21.962v-3.366h1v3.366zM7.042 7.68L4.577 5.329l.752-.708L7.73 7.004zm11.624 11.742l-2.352-2.452l.677-.657l2.388 2.346zM2.039 12.5v-1h3.384v1zm3.27 6.923l-.688-.752l2.358-2.357l.36.348l.378.354zM12.006 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17"
              />
            </svg>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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

export default ModeToggle;
