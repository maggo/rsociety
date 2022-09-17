const App = () => {
  return (
    <div className="p-6">
      <h1 className="font-black uppercase text-9xl leading-none text-[#ffd200] mb-8">
        Join
        <br /> the
        <br /> redis-
        <br />
        tribution.
      </h1>
      <p className="text-4xl text-white font-bold mb-8">
        Let&apos;s make hackathon prize money a public good.
        <br />
        Everyone receives $10 DAI, no questions asked. <br />
        We only need your vote.
      </p>
      <p className="mb-16 text-3xl">
        <a
          href="https://vote.ethberlin.ooo/2022"
          className="underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vote for us. Let&apos;s win together.
        </a>
      </p>
      <div className="space-y-4 max-w-xl text-lg">
        <div>
          <h2 className="font-bold text-xl">Why?</h2>
          <p>
            Most people will never win anything at a hackathon. With us,
            everyone is a winner! Let&apos;s make the prize pool a public good,
            equal distribution between all attendees.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">How?</h2>
          <p>
            <i>Memes.</i> People need to know about rsociety. If we win the open
            track voting by majority vote, we&apos;ll instruct the organizers to
            send the prize money directly to our smart contract. From there
            everyone with an ethercard (you received it with your badge!) can
            claim their share of the pool.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl">What?</h2>
          <p>
            <a
              href="https://github.com/ethb3rlin/attendees"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              All 1,000 ETH Berlin voter addresses are public.
            </a>{" "}
            We add them to our smart contract and allow everyone to claim their
            share of the $10,000 prize pool. The unclaimed funds will be
            airdropped to claimooors after 7 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
