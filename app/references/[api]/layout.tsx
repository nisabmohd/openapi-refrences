import { ClientContextProvider } from "@/components/refrences/client-context";
import ClientTester from "@/components/refrences/client-tester";
import { PropsWithChildren } from "react";

export default function ReferencesLayout({ children }: PropsWithChildren) {
  return (
    <ClientContextProvider>
      <ClientTester />
      {children}
    </ClientContextProvider>
  );
}
