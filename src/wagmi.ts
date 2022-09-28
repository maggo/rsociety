import { createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [publicProvider()]
);

export const client = createClient({
  connectors: [new InjectedConnector({ chains })],
  provider,
  webSocketProvider,
});
