import { useEffect, useState } from "react";

export default function useClientMounted() {
  const [mountedOnCLient, setMountedOnClient] = useState(false);
  useEffect(() => setMountedOnClient(true), []);
  return mountedOnCLient;
}
