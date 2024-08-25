"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { default_clients } from "./languages";

type ClientContextValueType = {
  selectedClient: {
    language: string;
    lib: string;
  };
  baseUrl: string | null;
  token: string;
  isClientTesterOpen: boolean;
  // add new key `testClientMetadata` for testing api in client dialog
};

type ClientContextActionType = {
  setData: (data: Partial<ClientContextValueType>) => void;
};

type ClientContext = ClientContextActionType & ClientContextValueType;

const ClientContext = createContext<ClientContext | null>(null);

export function useClientContext() {
  const val = useContext(ClientContext);
  if (!val) throw new Error("Component not wrapped in");
  return val;
}

export function ClientContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<ClientContextValueType>({
    selectedClient: {
      language: default_clients[0].language,
      lib: default_clients[0].items[0].name,
    },
    baseUrl: null,
    token: "",
    isClientTesterOpen: false,
  });

  const setData = useCallback(function (data: Partial<ClientContextValueType>) {
    setState((prev) => ({ ...prev, ...data }));
  }, []);

  return (
    <ClientContext.Provider value={{ ...state, setData }}>
      {children}
    </ClientContext.Provider>
  );
}
