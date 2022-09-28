import { createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { provider, webSocketProvider } = configureChains(
  [chain.goerli], // [chain.optimism]
  [publicProvider()]
);

export const client = createClient({
  provider,
  webSocketProvider,
});
