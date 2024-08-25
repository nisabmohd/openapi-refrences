import { ModeToggle } from "../theme-toggle";

export default function Leftbar() {
  return (
    <aside className="min-w-[300px] p-5 flex flex-col justify-between h-full top-0 sticky">
      <div>leftbar</div>
      <div>
        <ModeToggle />
      </div>
    </aside>
  );
}
