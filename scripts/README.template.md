# LLM API prices

Live API prices for {{count}} AI models, from Claude, GPT and Gemini to DeepSeek, Qwen, Nano Banana and Seedance, with each lab's list price beside the price on [Zurelay](https://zurelay.com). Updated every day, as JSON and CSV, with a dated snapshot so the history builds up.

Last updated: **{{updated}}**

- [`data/prices.json`](data/prices.json): every model, with `price`, `reference_price` and `saving_percent`
- [`data/prices.csv`](data/prices.csv): the same, one row per model, for spreadsheets
- [`data/history/`](data/history): one snapshot per day
- Live, without this repo: <https://zurelay.com/prices.json> and <https://zurelay.com/prices.csv>

## Chat models

Per 1M input / output tokens, cheapest output first. List price is the lab's own.

| Model | Lab | List price | Zurelay | Saving |
| --- | --- | --- | --- | --- |
{{chat}}

## Image models

Per image, at the smallest size each model makes.

| Model | Lab | List price | Zurelay | Saving |
| --- | --- | --- | --- | --- |
{{image}}

## Video models

Per second of video. The comparison is fal.ai's price, or the lab's own where it sells video.

| Model | Lab | Compared with | Zurelay | Saving |
| --- | --- | --- | --- | --- |
{{video}}

## Fields

- `price` / `reference_price`: chat and speech per 1M tokens (`input_per_1m`, `output_per_1m`, `cached_input_per_1m`); images `per_image` and `per_image_by_size`; video `per_second_from` and `per_second_by_resolution`.
- `compared_with`: `list` for the lab's list price, or for video the provider whose price is the comparison.
- `saving_percent`: how far below the comparison Zurelay's price is (output tokens for chat, the smallest size for images).

Tools: an [LLM API cost calculator](https://zurelay.com/llm-cost-calculator) prices a month of any workload on every model, and [the cheapest LLM APIs](https://zurelay.com/cheapest-llm-api) ranks them.

## License

Data: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Use it, share it and build on it, with credit to Zurelay and a link to <https://zurelay.com/models>. Code in `scripts/`: MIT.
