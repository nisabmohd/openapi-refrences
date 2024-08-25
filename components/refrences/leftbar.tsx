import { cn, getColorForMethod, RequestMethod } from "@/lib/utils";
import { ModeToggle } from "../theme-toggle";
import { Input } from "../ui/input";
import { ChevronDownIcon, ChevronsUpDownIcon } from "lucide-react";

export default function Leftbar() {
  return (
    <aside className="min-w-[300px]  flex flex-col justify-between h-full top-0 sticky">
      <div className="p-5 px-6">
        <SearchCommand />
        <div className="flex flex-col gap-4 mt-5 ">
          {dummy_list.map((tag) => {
            return (
              <div key={tag.title}>
                <h4 className="text-[13.3px] mb-1.5 font-medium flex items-center gap-1">
                  <ChevronDownIcon className="w-[0.9rem] h-[0.9rem] mb-0.5" />
                  {tag.title}
                </h4>
                <div className="flex flex-col gap-1.5 pl-5 font-medium">
                  {tag.items.map((subtag) => (
                    <div
                      className="text-[13.3px] text-muted-foreground flex items-center justify-between"
                      key={subtag.title}
                    >
                      {subtag.title}{" "}
                      <span
                        className={cn(
                          "uppercase text-[11.5px] font-semibold font-code",
                          getColorForMethod(subtag.method as RequestMethod)
                        )}
                      >
                        {subtag.method != "post"
                          ? subtag.method.slice(0, 3)
                          : subtag.method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t py-3 px-6">
        <ModeToggle />
      </div>
    </aside>
  );
}

function SearchCommand() {
  return (
    <div>
      <Input placeholder="Search.." className="h-8" />
    </div>
  );
}

const dummy_list = [
  {
    title: "User",
    items: [
      { title: "Get all users", method: "get" },
      { title: "Create new user", method: "post" },
      { title: "Get a user by ID​", method: "get" },
      { title: "Update a user by ID​", method: "put" },
      { title: "Delete a user by ID​", method: "delete" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Get all products", method: "get" },
      { title: "Get a product by ID​", method: "get" },
      { title: "Update a product by ID​", method: "put" },
      { title: "Delete a product by ID​", method: "delete" },
    ],
  },
  {
    title: "Post",
    items: [
      { title: "Create new post", method: "post" },
      { title: "Get all posts", method: "get" },
      { title: "Get a post by ID​", method: "get" },
      { title: "Update a post by ID​", method: "put" },
      { title: "Delete a post by ID​", method: "delete" },
    ],
  },
];
