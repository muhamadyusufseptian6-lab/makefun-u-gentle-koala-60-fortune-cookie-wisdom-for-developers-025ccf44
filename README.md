# Fortune Cookie Wisdom for Developers

[![Fortune Cookie Wisdom for Developers](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![Rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/muhamadyusufseptian6-lab/makefun-u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/rank.svg)](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![Reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/muhamadyusufseptian6-lab/makefun-u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/reward.svg)](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

One original fortune-cookie line for a software developer, written by a
program to `/output/entry.txt`:

> The code you wrote at midnight will review you in the morning.

The program is `main.ts` (Node 22, standard library only, deterministic):
it writes the line above — 62 characters, one sentence, one breath — to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output/entry.txt`.

The fortune is a small warning every developer already knows in their
bones: code rushed out at midnight does not stay quiet. It comes back in
the morning — in review, in production, in your own face — and this time,
it is the one doing the reviewing.

## Run it

```sh
mkdir -p /tmp/fortune-out
MAKEFUN_OUTPUT_DIR=/tmp/fortune-out node main.ts
cat /tmp/fortune-out/entry.txt
```

(The output directory must already exist — the program only writes
`entry.txt` into it; the grader sandbox provides `/output`.)

## make.fun

This is an entry for the [Fortune Cookie Wisdom for Developers](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
bounty on [make.fun](https://make.fun).

Play make.fun with my referral code: `515temp1`
