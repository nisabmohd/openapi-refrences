"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useClientContext } from "./client-context";

// todo make functional tester client

export default function ClientTester() {
  const { isClientTesterOpen, setData } = useClientContext();

  return (
    <Dialog
      open={isClientTesterOpen}
      onOpenChange={(val) => setData({ isClientTesterOpen: val })}
    >
      <DialogContent className="max-w-[1400px] h-[90vh]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
