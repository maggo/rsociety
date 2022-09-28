import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
} from "wagmi";
import { abi } from "./abi";
import attendees from "./attendees.json";
import { MerkleTree } from "merkletreejs";
import { ethers } from "ethers";

const merkleAddresses = attendees.map((a) => a.address);

const CONTRACT = "0xFBF562a98aB8584178efDcFd09755FF9A1e7E3a2";

const merkleTree = new MerkleTree(merkleAddresses, hashAddress, {
  sort: true,
  hashLeaves: true,
});

function hashAddress(address: string) {
  return ethers.utils.solidityKeccak256(["address"], [address]);
}

export function Claim() {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { disconnect } = useDisconnect();

  const { address } = useAccount();

  return (
    <div>
      {isConnected ? (
        <>
          <div className="text-sm mb-2">
            Connected as {address} on {chain?.name}{" "}
            <button
              className="underline decoration-dotted"
              onClick={() => disconnect()}
            >
              Disconnect?
            </button>
          </div>
          <CanClaim />
        </>
      ) : (
        connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
            className="px-4 py-2 bg-yellow-300 text-black rounded-md"
          >
            {isLoading && pendingConnector?.id === connector.id ? (
              "Connecting…"
            ) : (
              <>Connect with {connector.name}</>
            )}
          </button>
        ))
      )}

      {error && <div>{error.message}</div>}
    </div>
  );
}

function CanClaim() {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { switchNetwork, chains } = useSwitchNetwork();

  const proof = address
    ? merkleTree.getHexProof(hashAddress(address))
    : undefined;

  const unsupportedNetwork = !!chain && chain.unsupported;

  const { data: isClaimable } = useContractRead({
    addressOrName: CONTRACT,
    contractInterface: abi,
    functionName: "isClaimable",
  });

  const { data: hasClaimed } = useContractRead({
    addressOrName: CONTRACT,
    contractInterface: abi,
    functionName: "hasClaimed",
    args: address,
    enabled: !!address,
  });

  if (unsupportedNetwork) {
    return (
      <div>
        Wrong chain!{" "}
        <button
          onClick={() => switchNetwork?.(chains[0].id)}
          className="underline decoration-dotted decoration-slate-400 hover:no-underline"
        >
          Switch Network to {chains[0].name}?
        </button>
      </div>
    );
  }

  if (!isClaimable) {
    return (
      <div>
        Oops looks like claims are not available! Check twitter for info
        @rsocietyeth
      </div>
    );
  }

  if (!proof?.length) {
    return (
      <div>
        Oops, looks like your account is not eligible. <br />
        Make sure that you're connected with your EtherCard wallet!
      </div>
    );
  }

  if (hasClaimed) {
    return (
      <div>You've claimed your share already! Have fun with your money 💸</div>
    );
  }

  return <ClaimShare />;
}

function ClaimShare() {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const proof = address
    ? merkleTree.getHexProof(hashAddress(address))
    : undefined;

  const { config } = usePrepareContractWrite({
    addressOrName: CONTRACT,
    contractInterface: abi,
    functionName: "claim",
    args: [proof],
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  if (isSuccess) {
    return (
      <div>
        {chain?.blockExplorers?.default ? (
          <a
            className="underline decoration-dotted hover:no-underline"
            href={`${chain?.blockExplorers?.default.url}/tx/${data?.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            Done 🥳 Check transaction on {chain?.blockExplorers?.default?.name}
          </a>
        ) : (
          <div>
            Transaction ID:
            <div className="break-all">{data?.hash}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <button
        className="px-4 py-2 bg-yellow-300 text-black rounded-md disabled:opacity-50"
        disabled={!write}
        onClick={() => write?.()}
      >
        Claim your $10 💸
      </button>
      {isLoading && <div className="text-sm">Check wallet for transaction</div>}
    </div>
  );
}
