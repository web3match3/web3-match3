export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold">
          Match3 Web3
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Play. Compete. Win USDT.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="border rounded-lg px-6 py-3">
            Connect Wallet
          </button>

          <button className="border rounded-lg px-6 py-3">
            Read Litepaper
          </button>
        </div>
      </section>


      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">
          About
        </h2>

        <p className="text-gray-300">
          Match3 Web3 is a competitive Match-3 puzzle game built on Web3.
        </p>

        <p className="mt-4 text-gray-300">
          Players compete during a 50-day season.
        </p>

        <p className="mt-4 text-gray-300">
          Top 300 players receive USDT rewards.
        </p>
      </section>


      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 py-16">

        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-3xl font-bold">
            0
          </h3>

          <p className="text-gray-400">
            Registered Players
          </p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-3xl font-bold">
            0 USDT
          </h3>

          <p className="text-gray-400">
            Current Prize Pool
          </p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-3xl font-bold">
            50 Days
          </h3>

          <p className="text-gray-400">
            Season Duration
          </p>
        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6">
            1. Connect Wallet
          </div>

          <div className="border rounded-xl p-6">
            2. Pay 3 USDT Entry Fee
          </div>

          <div className="border rounded-xl p-6">
            3. Play Daily
          </div>

          <div className="border rounded-xl p-6">
            4. Earn Perfect Runs
          </div>

          <div className="border rounded-xl p-6">
            5. Climb Leaderboard
          </div>

          <div className="border rounded-xl p-6">
            6. Win USDT Rewards
          </div>

        </div>

      </section>


      {/* SEASON RULES */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Season Rules
        </h2>

        <ul className="space-y-4">

          <li>Season Duration : 50 Days</li>

          <li>15 Free Games Daily</li>

          <li>Extra Games : 5 Games = 0.5 USDT</li>

          <li>Max Purchase : 5 Times Daily</li>

          <li>Max Games : 40 Daily</li>

        </ul>

      </section>


      {/* LEADERBOARD */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Leaderboard Rules
        </h2>

        <ul className="space-y-4">

          <li>Perfect Run = +1 Point</li>

          <li>1. Most Perfect Runs</li>

          <li>2. Fewer Games Played</li>

          <li>3. Earlier Achievement Time</li>

        </ul>

      </section>


      {/* PRIZE POOL */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Prize Pool
        </h2>

        <ul className="space-y-4">

          <li>70% Prize Pool</li>

          <li>20% Operations</li>

          <li>10% Reserve</li>

        </ul>

      </section>

{/* Economy & Prize Distribution */}
<section className="max-w-5xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold mb-12">
    Economy & Prize Distribution
  </h2>

  <div className="space-y-8">

    <div>
      <h3 className="text-2xl mb-4">Entry Fee</h3>

      <p>3 USDT</p>

      <p className="text-gray-400">
        Fixed entry fee for every season.
      </p>
    </div>

    <div>
      <h3 className="text-2xl mb-4">Daily Free Games</h3>

      <p>15 Free Games Daily</p>
    </div>

    <div>
      <h3 className="text-2xl mb-4">Extra Games</h3>

      <ul className="space-y-2">
        <li>5 Games = 0.5 USDT</li>
        <li>Max Purchase: 5 Times Daily</li>
        <li>Max Games: 40 Daily</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl mb-4">Prize Pool Allocation</h3>

      <ul className="space-y-2">
        <li>70% → Rewards</li>
        <li>20% → Operations</li>
        <li>10% → Reserve</li>
      </ul>
    </div>

    <div>
      <h3 className="text-2xl mb-4">Reward Distribution</h3>

      <p>
        Top 300 players receive rewards.
      </p>

      <p className="text-gray-400 mt-2">
        Higher Rank = Higher Reward
      </p>

      <p className="text-gray-400">
        Rewards scale automatically with the Prize Pool.
      </p>
    </div>

  </div>

</section>

      {/* ANTI CHEAT */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Anti Cheat
        </h2>

        <ul className="space-y-4">

          <li>One Wallet = One Account</li>

          <li>Server-Side Validation</li>

          <li>Activity Monitoring</li>

          <li>Fair Ranking System</li>

        </ul>

      </section>
{/* Game Mechanics */}
<section className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold mb-12">
    Game Mechanics
  </h2>

  <div className="space-y-4">
    <p><b>Mode:</b> Score Attack</p>
    <p><b>Board:</b> 9×9</p>
    <p><b>Tiles:</b> 6 Types</p>
    <p><b>Move Limit:</b> 30</p>
    <p><b>Target Score:</b> 20,000</p>

    <h3 className="text-2xl mt-8">Game Ends When</h3>

    <ul className="space-y-2">
      <li>✓ Target 20,000 reached</li>
      <li>✓ OR 30 moves are used</li>
    </ul>

    <h3 className="text-2xl mt-8">Perfect Run</h3>

    <ul className="space-y-2">
      <li>✓ Every move is valid</li>
      <li>✓ No Dead Move</li>
      <li>✓ No Hint Used</li>
      <li>✓ Minimum one combo chain each move</li>
      <li>✓ Server validated</li>
    </ul>

    <h3 className="text-2xl mt-8">Power Ups</h3>

    <ul className="space-y-2">
      <li>Bomb</li>
      <li>Rainbow Tile</li>
      <li>Lightning</li>
      <li>Fire Blast</li>
    </ul>

    <p className="text-gray-400">
      Power-ups are earned from gameplay only and cannot be purchased.
    </p>
  </div>
</section>

{/* Database Structure */}
<section className="max-w-5xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold mb-12">
    Database Structure
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border rounded-xl p-6">
      <h3 className="text-2xl mb-4">users</h3>

      <ul className="space-y-2 text-gray-300">
        <li>wallet_address</li>
        <li>username</li>
        <li>registered_at</li>
        <li>last_login</li>
        <li>status</li>
      </ul>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="text-2xl mb-4">player_stats</h3>

      <ul className="space-y-2 text-gray-300">
        <li>games_played</li>
        <li>perfect_runs</li>
        <li>highest_combo</li>
        <li>highest_score</li>
        <li>rank</li>
      </ul>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="text-2xl mb-4">game_results</h3>

      <ul className="space-y-2 text-gray-300">
        <li>game_id</li>
        <li>wallet_address</li>
        <li>score</li>
        <li>moves_used</li>
        <li>combo_max</li>
        <li>perfect_run</li>
      </ul>
    </div>

    <div className="border rounded-xl p-6">
      <h3 className="text-2xl mb-4">prize_pool</h3>

      <ul className="space-y-2 text-gray-300">
        <li>registered_players</li>
        <li>prize_pool_total</li>
        <li>reward_pool</li>
        <li>operations_pool</li>
        <li>reserve_pool</li>
      </ul>
    </div>

  </div>

</section>

      {/* ROADMAP */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Roadmap
        </h2>

        <ul className="space-y-4">

          <li>Season 1 — Launch MVP</li>

          <li>Season 2 — Referral System</li>

          <li>Season 3 — Achievements</li>

          <li>Season 4 — Guild System</li>

        </ul>

      </section>


      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          FAQ
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-bold">
              Can I create multiple accounts?
            </h3>

            <p>No.</p>
          </div>

          <div>
            <h3 className="font-bold">
              How are rewards distributed?
            </h3>

            <p>USDT sent directly to winners.</p>
          </div>

          <div>
            <h3 className="font-bold">
              How is ranking calculated?
            </h3>

            <p>
              Perfect Runs + Tie Break Rules.
            </p>
          </div>

        </div>

      </section>


      <footer className="text-center text-gray-500 py-12">
        Match3 Web3 © 2026
      </footer>

    </main>
  );
}
