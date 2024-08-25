import { PropsWithChildren } from "react";

export default function ReferencesLayout({ children }: PropsWithChildren) {
  // wrap context here
  return <div>{children}</div>;
}
