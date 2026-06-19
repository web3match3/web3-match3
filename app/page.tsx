export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold">
          Match3 Web3
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Play. Compete. Win USDT.
        </p>

        <p className="mt-6 max-w-2xl text-gray-400">
          A competitive Match-3 puzzle game where players battle for leaderboard
          positions and share the growing USDT prize pool.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg border px-6 py-3">
            Litepaper
          </button>

          <button className="rounded-lg border px-6 py-3">
            Leaderboard
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 max-w-5xl mx-auto">
        <div className="border rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold">0</h2>
          <p className="text-gray-400">Players Registered</p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold">0 USDT</h2>
          <p className="text-gray-400">Current Prize Pool</p>
        </div>

        <div className="border rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold">50 Days</h2>
          <p className="text-gray-400">Season Duration</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-2">1. Register</h3>
            <p>Connect wallet and pay 3 USDT.</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-2">2. Play</h3>
            <p>Play Match-3 puzzle games every day.</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-2">3. Earn</h3>
            <p>Collect Perfect Runs and climb the leaderboard.</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-2">4. Win</h3>
            <p>Top 300 players receive USDT rewards.</p>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Season Rules
        </h2>

        <div className="border rounded-xl p-8">
          <ul className="space-y-3">
            <li>✓ Entry Fee: 3 USDT</li>
            <li>✓ 15 Free Games Daily</li>
            <li>✓ Extra 5 Games = 0.5 USDT</li>
            <li>✓ Max 5 Purchases Daily</li>
            <li>✓ Max 40 Games Daily</li>
            <li>✓ Season Duration: 50 Days</li>
            <li>✓ Top 300 Players Win Rewards</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-gray-500">
        Match3 Web3 © 2026
      </footer>
    </main>
  );
}
