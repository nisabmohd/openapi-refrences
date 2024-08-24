import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between h-16">
        <div>
          <h3 className="text-xl font-bold font-sans">API References</h3>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
