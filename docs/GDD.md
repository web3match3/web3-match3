Match3 Web3 GDD

1. Overview

Game Name:
Match3 Web3

Genre:
Competitive Match-3 Puzzle

Platform:
Web

Currency:
USDT

Season Duration:
50 Days

Entry Fee:
3 USDT

Top Players Rewarded:
300

---

2. Core Gameplay

Player Flow:

1. Connect Wallet

2. Pay 3 USDT Entry Fee

3. Receive 15 Free Games Daily

4. Play Match-3 Puzzle

5. Earn Perfect Runs

6. Climb Leaderboard

7. Receive USDT Rewards

---

3. Season Rules

Season Duration:
50 Days

Daily Free Games:
15

Extra Games:

5 Games = 0.5 USDT

Maximum Purchase:
5 Times Daily

Maximum Games:
40 Daily

---

4. Ranking System

Perfect Run = +1 Point

Tie Break Priority:

1. Most Perfect Runs

2. Fewer Games Played

3. Earlier Achievement Time

---

5. Reward System

Prize Pool Sources:

- Entry Fee
- Extra Games Purchase

Allocation:

70% Prize Pool

20% Operations

10% Reserve

Reward Rules:

Top 300 players receive rewards.

Higher Rank = Higher Reward

Reward amount depends on total prize pool.

---

6. Wallet System

Supported Wallet:

- MetaMask
- WalletConnect
- OKX Wallet

Rules:

One Wallet = One Account

Wallet address acts as:

- Account ID
- Reward Destination
- Ranking Identity

---

7. Anti Cheat System

Objectives:

Maintain fairness and trust.

Methods:

- One Wallet One Account

- Server-side Validation

- Activity Monitoring

Detect:

- Bots
- Automated Play
- Suspicious Activity

Only validated Perfect Runs count toward ranking.

---

8. Database Structure

users

wallet_address

username

games_played

perfect_runs

rank

registered_at

season_stats

registered_players

prize_pool

season_duration

updated_at

game_results

wallet_address

score

moves

perfect_run

timestamp

purchases

wallet_address

amount

games_received

timestamp

---

9. API Endpoints

POST /api/connect-wallet

POST /api/pay-entry

GET /api/leaderboard

GET /api/prize-pool

POST /api/start-game

POST /api/submit-result

GET /api/season

POST /api/claim-reward

---

10. Smart Contract Logic

Functions:

enterSeason()

buyExtraGames()

updatePrizePool()

claimReward()

getLeaderboard()

Requirements:

- USDT Payment
- Reward Distribution
- Season Validation
- Ownership Verification

---

11. UI Flow

Landing Page

↓

Connect Wallet

↓

Pay Entry Fee

↓

Dashboard

↓

Play Match3

↓

Submit Result

↓

Leaderboard

↓

Season Ends

↓

Claim Reward

---

12. Roadmap

Season 1

Launch MVP

Season 2

Referral System

Season 3

Achievements

Season 4

Guild System

Season 5

PvP Tournament

NFT Cosmetics

Spectator Mode
## 13. Game Mechanics

### Game Mode

Mode:

Score Attack


### Board

Board Size:

9 × 9

Total Tiles:

81


### Tile Types

There are 6 tile types:

🔴 Ruby

🔵 Sapphire

🟢 Emerald

🟡 Gold

🟣 Crystal

🟠 Fire


### Move Limit

Maximum:

30 Moves


### Target Score

Target Score:

20,000


### Game End Conditions

The game ends when:

1. Player reaches 20,000 points

OR

2. Player uses all 30 moves

Whichever comes first.


### Match Rules

Players can swap adjacent tiles.

Valid Matches:

- Match 3
- Match 4
- Match 5

After a match:

1. Matched tiles disappear.

2. Tiles above fall down.

3. New tiles spawn from top.

4. Automatic chain reactions continue until no match remains.


### Scoring System

Match 3:

100 Points

Match 4:

250 Points

Match 5:

500 Points


### Combo Chain

Chain 1:

Normal Score

Chain 2:

+50%

Chain 3:

+100%

Chain 4:

+150%

Chain 5+:

+200%


### Perfect Run

A run is considered PERFECT if:

✓ Every move creates a valid match.

✓ No Dead Move occurs.

✓ No Hint is used.

✓ Every move triggers at least one Combo Chain.

✓ Server validation passed.


Dead Move Definition:

A move that does NOT create any Match-3 combination.


### Perfect Bonus

+100% Final Score

and

Perfect Run Count +1


### Leaderboard Priority

1. Perfect Run Status

2. Total Score

3. Highest Combo Chain

4. Fastest Completion Time


### Power Ups

Available Power Ups:

Bomb

Destroy surrounding tiles.


Rainbow Tile

Matches with any tile.


Lightning

Destroy one row and one column.


Fire Blast

Destroy selected area.


Rules:

Power Ups are earned from gameplay only.

Power Ups cannot be purchased.

Skill is prioritized over spending.
