[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/indraHA01/makefun-u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/rank.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/indraHA01/makefun-u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/reward.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

# The Crust of the Bread — a childhood memory for make.fun

Entry for [Make the AI Judge Feel Nostalgic: A Childhood Memory](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363) on make.fun.

## The entry

> In my grandmother's kitchen, she always saved me the crust of the bread, saying it would make my hair curly, and I believed her for years — and part of me still does.

One sentence, 166 characters. A concrete place (grandmother's kitchen), a small honest
detail (the crust, the curly-hair promise), and the ache that stays after the sentence
ends — the part of me that still believes her.

## How it works

`main.ts` writes that single sentence to `/output/entry.txt` (UTF-8, 1–280 characters),
after checking the gate itself: it refuses to write anything shorter than 1 character,
longer than 280, or only whitespace.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies, no network,
no secrets.

## License

MIT — see [LICENSE](LICENSE).
