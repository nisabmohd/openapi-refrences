import { PlayIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { available_req_languages } from "./languages";

type RequestBoxProps = {
  method: "get" | "post" | "put" | "delete" | "options" | "head" | "patch";
  endPoint: `/${string}`;
  url: string;
  // todo add query params / headers other options too
};

// todo http code color
// todo languages and codes
// todo test request workable (with context)
// todo max height

const stringCode = `curl --request GET \\
  --url https://api.example.com/v1/users \\
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'`;

export default function RequestBox({ endPoint, method, url }: RequestBoxProps) {
  return (
    <div className="w-[600px] border rounded-lg font-code">
      <div className="flex items-center justify-between border-b px-3 pr-2 py-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-sky-500 font-semibold">GET</span>
          <span className="text-muted-foreground">{endPoint}</span>
        </div>
        <Select defaultValue="js">
          <SelectTrigger className="min-w-[80px] max-w-fit h-[30px] border-none mx-0 text-sm">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="font-code">
            {available_req_languages.map((it) => (
              <SelectItem className="text-sm" key={it.value} value={it.value}>
                {it.name}
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
        <Button variant="ghost" size="sm" className="text-xs h-7">
          <PlayIcon className="mr-1.5 w-3 h-3 text-muted-foreground fill-current" />
          Test Request
        </Button>
      </div>
    </div>
  );
}
