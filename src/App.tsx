import { Claim } from "./Claim";

const App = () => {
  return (
    <div className="p-6">
      <div className="relative flex gap-4 items-center mb-8">
        <img
          src="./logo.jpeg"
          alt="rsociety"
          className="w-16 lg:w-28 xl:w-36 h-auto xl:absolute top-0 right-0"
        />
        <div>
          <h1 className="font-black uppercase text-4xl lg:text-6xl xl:text-8xl leading-none text-[#ffd200]">
            LET&apos;S HACK ETHBERLIN.
            <br />
            WITH RSOCIETY <br />
            EVERYONE WINS.
          </h1>
        </div>
      </div>

      <p className="text-1xl lg:text-3xl text-white font-bold mb-8">
        Let&apos;s make hackathon prize money a public good.
        <br />
        Everyone receives a $10+ share of the open track prize, guaranteed.
        <br />
        We just need to win the vote. #hackthehack
      </p>
      <div>
        <h2 className="text-5xl font-bold text-[#ffd200] mb-4">
          WE WON <span className="animate-bounce inline-block">🎉</span>
        </h2>
        <p className="text-1xl lg:text-3xl text-white font-bold mb-8">
          <a
            href="https://devfolio.co/projects/rsociety-hack-ethberlin-and-receive-dai-d240"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline text-[#ffd200]"
          >
            Check out our hack on Devfolio
          </a>{" "}
          &{" "}
          <a
            href="https://vote.ethberlin.ooo/2022/proposal/QmeqNwLod9x4z6QGAgH3CLX4Zob9ZrK4E9KeVbSB7Gbs7M"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline text-[#ffd200]"
          >
            Vote results
          </a>
        </p>
        <img src="./wewon.gif" alt="" className="mb-4" />
        <div className="bg-opacity-10 bg-gray-50 p-4 rounded-lg">
          <p className="mb-4">Claim your share:</p>
          <Claim />
        </div>
      </div>
      <hr className="my-8" />
      <div className="space-y-4 max-w-xl text-lg">
        <div>
          <h2 className="font-bold text-xl">What does rsociety mean?</h2>
          <p>
            We're building the <strong className="text-[#ffd200]">r</strong>
            edistribution society. Everyone should get their share! Could also
            mean <strong className="text-[#ffd200]">OUR</strong>society ;){" "}
            <a
              href="https://twitter.com/rsocietyeth"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-[#ffd200]"
            >
              Follow us on twitter
            </a>
            !
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Why should I vote for rsociety?</h2>
          <p>
            The open-track prize is the main hackathon award. Every eligible
            project can be judged by anyone attending the event using their
            EtherCard. The winning project will present at the closing ceremony
            and the prize is 10k DAI. The catch? There is only one. Until now…
            When rsociety wins, everyone wins!
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">How can I vote?</h2>
          <ol className="list-decimal pl-6">
            <li>
              <a
                href="https://mint.ethberlin.ooo/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-[#ffd200]"
              >
                Mint your voting NFT
              </a>{" "}
              (make sure you're connected to Görli)
            </li>
            <li>
              <a
                href="https://vote.ethberlin.ooo/2022"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-[#ffd200]"
              >
                Check out the open votes
              </a>{" "}
              and chose your favorite projects
            </li>
            <li>Give rsociety all your votes! ;)</li>
          </ol>
        </div>
        <div>
          <h2 className="font-bold text-xl">
            How will the money be distributed?
          </h2>
          <p>
            When rsociety wins the open track voting by majority vote, the prize
            money will be sent directly to the rsociety.eth smart contract. From
            there everyone with an EtherCard (the one you received with your
            badge) can claim their $10+ DAI share of the pool. Any unclaimed
            assets will be distributed evenly and airdropped to claim00rs.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">How does the claim work?</h2>
          <p>
            Upon securing the majority vote, the rsociety.eth smart contract
            will be receiving the prize money on Optimism. ETHBerlin has
            published a list of all{" "}
            <a
              href="https://github.com/ethb3rlin/attendees"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-[#ffd200]"
            >
              public addresses for the 1,000 EtherCards
            </a>{" "}
            which make up to our allow-list. To claim to money you simply
            connect your wallet to the Optimism Network and click the “Claim
            your share” button on this page. Sign the transaction, voila, and
            the money is yours.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">
            What happens to the unclaimed DAI?
          </h2>
          <p>
            You will have 7 days to claim your $10+ DAI, afterwards the
            unclaimed DAI will be evenly distributed and airdropped to all
            addresses that claimed the initial $10+ DAI.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Why should I trust you?</h2>
          <p>
            Don&apos;t trust us, trust the code. The prize DAI will be directly
            transferred to the smart contract address rsociety.eth.{" "}
            <a
              href="https://optimistic.etherscan.io/address/0xFBF562a98aB8584178efDcFd09755FF9A1e7E3a2"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-[#ffd200]"
            >
              You can read the contract code here,
            </a>{" "}
            <a
              href="https://repo.sourcify.dev/contracts/full_match/10/0xFBF562a98aB8584178efDcFd09755FF9A1e7E3a2/sources/contracts/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-[#ffd200]"
            >
              and verify on SourcifyETH.
            </a>
            <br />
            TL;DR we can&apos;t withdraw the funds, only the addresses
            associated with the 1,000 EtherCards can.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
