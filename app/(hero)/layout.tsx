import Navbar from "@/components/navbar";
import { PropsWithChildren } from "react";

export default function HeroPageLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <div className="container py-5">{children}</div>
    </div>
  );
}
