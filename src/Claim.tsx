import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { abi } from "./abi";
import attendees from "./attendees.json";
import { MerkleTree } from "merkletreejs";
import { ethers } from "ethers";

const merkleAddresses = attendees.map((a) => a.address);

const merkleTree = new MerkleTree(merkleAddresses, hashAddress, {
  sort: true,
  hashLeaves: true,
});

function hashAddress(address: string) {
  return ethers.utils.solidityKeccak256(["address"], [address]);
}

export function Claim() {
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { address } = useAccount();

  return (
    <div className="mb-8">
      <CanClaim />
      {isConnected ? (
        <div>
          Connected to {activeConnector?.name} as {address}
        </div>
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
  const { address, isConnected } = useAccount();
  const proof = address
    ? merkleTree.getHexProof(hashAddress(address))
    : undefined;

  const { data } = useContractRead({
    addressOrName: "0x35F37545a95967a677402E45D2e3e5158f8E5852",
    contractInterface: abi,
    functionName: "isClaimable",
  });

  const { data: hasClaimed } = useContractRead({
    addressOrName: "0x35F37545a95967a677402E45D2e3e5158f8E5852",
    contractInterface: abi,
    functionName: "hasClaimed",
    args: address,
    enabled: !!address,
  });

  return (
    <div>
      <p>Can Claim: {data?.toString()}</p>
      <p>Has Claimed: {hasClaimed?.toString()}</p>
      <p>Proof: {proof?.toString()}</p>
      <ClaimShare />
    </div>
  );
}

function ClaimShare() {
  const { address } = useAccount();
  const proof = address
    ? merkleTree.getHexProof(hashAddress(address))
    : undefined;

  const { config } = usePrepareContractWrite({
    addressOrName: "0x35F37545a95967a677402E45D2e3e5158f8E5852",
    contractInterface: abi,
    functionName: "claim",
    args: proof,
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div>
      <button
        className="px-4 py-2 bg-yellow-300 text-black rounded-md"
        disabled={!write}
        onClick={() => write?.()}
      >
        Claim
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}
