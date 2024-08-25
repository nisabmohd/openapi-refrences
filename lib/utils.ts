import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RequestMethod =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "options"
  | "head"
  | "patch";

export function getColorForMethod(method: RequestMethod) {
  return clsx({
    "text-sky-500": method == "get",
    "text-red-500": method == "delete",
    "text-green-500": method == "post",
    "text-orange-500": method == "put",
    "text-gray-500": method == "options",
    "text-voilet-500": method == "patch",
    "text-pink-500": method == "head",
  });
}
