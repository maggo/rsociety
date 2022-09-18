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
      <div className="mb-16 md:text-3xl flex gap-8">
        <div className="text-base text-center">
          <div className="mb-2">Step 1</div>
          <a
            href="https://vote.ethberlin.ooo/2022"
            className="mx-auto block px-4 py-2 rounded-md text-base font-bold bg-yellow-300 text-black"
            target="_blank"
            rel="noreferrer noopener"
          >
            Vote here
          </a>
        </div>
        <div className="text-base text-center group relative">
          <div className="mb-2">Step 2</div>
          <button
            disabled
            className="mx-auto block px-4 py-2 rounded-md text-base font-bold bg-gray-300 opacity-50 text-black pointer-events-none"
          >
            Claim your share
          </button>
          <span className="text-xs hidden group-hover:block p-2 bg-slate-800 text-white absolute top-full mt-2 w-[120%] left-1/2 -translate-x-1/2">
            Will be enabled when we win!
          </span>
        </div>
      </div>
      <div className="space-y-4 max-w-xl text-lg">
        <div>
          <h2 className="font-bold text-xl">What does rsociety mean?</h2>
          <p>
            We're building the <strong className="text-[#ffd200]">r</strong>
            edistribution society. Everyone should get their share! Could also
            mean <strong className="text-[#ffd200]">OUR</strong>society ;)
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
          <h2 className="font-bold text-xl">
            How will the money be distributed?
          </h2>
          <p>
            When rsociety wins the open track voting by majority vote, the prize
            money will be sent directly to the rsociety.eth smart contract. From
            there everyone with an EtherCard (the one you received with your
            badge) can claim their $10+ DAI share of the pool. Any unclaimed
            assets will be distributed evenly and airdropped to claim00rs
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
              className="underline hover:no-underline"
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
              href="https://optimistic.etherscan.io/address/0x41e727A4c19EEA4B7D0A079688268F3E74D4F6F0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              You can read the contract code here.
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
