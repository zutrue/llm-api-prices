# LLM API prices

Live API prices for 72 AI models, from Claude, GPT and Gemini to DeepSeek, Qwen, Nano Banana and Seedance, with each lab's list price beside the price on [Zurelay](https://zurelay.com). Updated every day, as JSON and CSV, with a dated snapshot so the history builds up.

Last updated: **2026-10-26**

- [`data/prices.json`](data/prices.json): every model, with `price`, `reference_price` and `saving_percent`
- [`data/prices.csv`](data/prices.csv): the same, one row per model, for spreadsheets
- [`data/history/`](data/history): one snapshot per day
- Live, without this repo: <https://zurelay.com/prices.json> and <https://zurelay.com/prices.csv>

## Chat models

Per 1M input / output tokens, cheapest output first. List price is the lab's own.

| Model | Lab | List price | Zurelay | Saving |
| --- | --- | --- | --- | --- |
| [DeepSeek V4 Flash 0731](https://zurelay.com/models/deepseek-v4-flash-0731) | DeepSeek | $0.076 / $0.153 | $0.029 / $0.087 | 43% |
| [DeepSeek V4.1 Flash 1017](https://zurelay.com/models/deepseek-v4.1-flash-1017) | DeepSeek | $0.30 / $1.20 | $0.03 / $0.12 | 90% |
| [DeepSeek V4.1 Flash](https://zurelay.com/models/deepseek-v4.1-flash) | DeepSeek | $0.30 / $1.20 | $0.03 / $0.12 | 90% |
| [DeepSeek V4 Flash](https://zurelay.com/models/deepseek-v4-flash) | DeepSeek | $0.30 / $1.20 | $0.03 / $0.12 | 90% |
| [GPT-6 Luna](https://zurelay.com/models/gpt-6-luna) | OpenAI | $0.10 / $0.50 | $0.025 / $0.125 | 75% |
| [MiMo V2.6 Flash](https://zurelay.com/models/mimo-v2.6-flash) | Xiaomi | $0.14 / $0.28 | $0.075 / $0.15 | 46% |
| [Claude Haiku 5.5](https://zurelay.com/models/claude-haiku-5-5) | Anthropic | $0.10 / $0.50 | $0.04 / $0.20 | 60% |
| [Qwen 3.8 Flash](https://zurelay.com/models/qwen3.8-flash) | Alibaba | $0.15 / $0.47 | $0.07 / $0.22 | 53% |
| [Qwen 3.8 Omni Flash](https://zurelay.com/models/qwen3.8-omni-flash) | Alibaba | $0.15 / $0.47 | $0.075 / $0.235 | 50% |
| [MiniMax M3.1 Flash](https://zurelay.com/models/minimax-m3.1-flash) | MiniMax | $0.15 / $0.60 | $0.06 / $0.24 | 60% |
| [GLM-5.3 Flash](https://zurelay.com/models/glm-5.3-flash) | Z.ai | $0.15 / $0.50 | $0.07 / $0.25 | 50% |
| [GPT-5.6 Luna](https://zurelay.com/models/gpt-5.6-luna) | OpenAI | $0.20 / $1.20 | $0.08 / $0.49 | 59% |
| [MiniMax M3](https://zurelay.com/models/minimax-m3) | MiniMax | $0.30 / $1.20 | $0.13 / $0.51 | 57% |
| [MiniMax M2.7](https://zurelay.com/models/minimax-m2.7) | MiniMax | $0.30 / $1.20 | $0.13 / $0.51 | 57% |
| [Gemini 3.1 Flash-Lite](https://zurelay.com/models/gemini-3.1-flash-lite) | Google | $0.25 / $1.50 | $0.10 / $0.59 | 61% |
| [DeepSeek V4 Pro 0813](https://zurelay.com/models/deepseek-v4-pro-0813) | DeepSeek | $1.32 / $3.96 | $0.23 / $0.62 | 84% |
| [MiMo V2.6 Pro](https://zurelay.com/models/mimo-v2.6-pro) | Xiaomi | $0.435 / $0.87 | $0.32 / $0.64 | 26% |
| [Gemini 3.5 Flash-Lite](https://zurelay.com/models/gemini-3.5-flash-lite) | Google | $0.30 / $2.50 | $0.12 / $1.04 | 58% |
| [HY4 Preview](https://zurelay.com/models/hy4-preview) | Tencent | $0.834 / $2.50 | $0.40 / $1.20 | 52% |
| [GLM-5.3](https://zurelay.com/models/glm-5.3) | Z.ai | $1.40 / $4.40 | $0.38 / $1.21 | 73% |
| [GLM-5.2](https://zurelay.com/models/glm-5.2) | Z.ai | $1.40 / $4.40 | $0.38 / $1.21 | 73% |
| [Gemini 3.8 Flash](https://zurelay.com/models/gemini-3.8-flash) | Google | $0.75 / $3.75 | $0.32 / $1.59 | 58% |
| [Gemini 3.7 Flash](https://zurelay.com/models/gemini-3.7-flash) | Google | $0.75 / $3.75 | $0.32 / $1.59 | 58% |
| [Grok 4.7](https://zurelay.com/models/grok-4.7) | xAI | $2.00 / $6.00 | $0.70 / $2.10 | 65% |
| [GPT-6.1 Sol](https://zurelay.com/models/gpt-6.1-sol) | OpenAI | $2.00 / $10.00 | $0.50 / $2.50 | 75% |
| [GPT-6 Sol](https://zurelay.com/models/gpt-6-sol) | OpenAI | $2.00 / $10.00 | $0.50 / $2.50 | 75% |
| [Claude Haiku 4.5](https://zurelay.com/models/claude-haiku-4-5) | Anthropic | $1.00 / $5.00 | $0.54 / $2.70 | 46% |
| [GPT-5.6 Terra](https://zurelay.com/models/gpt-5.6-terra) | OpenAI | $2.00 / $12.00 | $0.54 / $3.26 | 73% |
| [Qwen 3.8 Max](https://zurelay.com/models/qwen3.8-max) | Alibaba | $2.00 / $6.00 | $1.20 / $3.60 | 40% |
| [Gemini 4 Argon](https://zurelay.com/models/gemini-4-argon) | Google | $2.00 / $10.00 | $0.80 / $4.00 | 60% |
| [Kimi K3.1 Pro](https://zurelay.com/models/kimi-k3.1-pro) | Moonshot AI | $2.00 / $10.00 | $0.80 / $4.00 | 60% |
| [Claude Sonnet 5.5](https://zurelay.com/models/claude-sonnet-5-5) | Anthropic | $2.00 / $10.00 | $0.90 / $4.50 | 55% |
| [Gemini 3.1 Pro](https://zurelay.com/models/gemini-3.1-pro) | Google | $2.00 / $12.00 | $0.80 / $4.80 | 60% |
| [GPT-5.6 Sol](https://zurelay.com/models/gpt-5.6-sol) | OpenAI | $4.00 / $20.00 | $1.14 / $5.70 | 72% |
| [Muse Wonder](https://zurelay.com/models/muse-wonder-1.0) | Meta | $4.00 / $20.00 | $1.20 / $6.00 | 70% |
| [Kimi K3](https://zurelay.com/models/kimi-k3) | Moonshot AI | $3.00 / $15.00 | $1.27 / $6.37 | 58% |
| [Claude Opus 5.5](https://zurelay.com/models/claude-opus-5-5) | Anthropic | $4.00 / $20.00 | $1.40 / $7.00 | 65% |
| [Claude Opus 5](https://zurelay.com/models/claude-opus-5) | Anthropic | $5.00 / $25.00 | $1.75 / $8.75 | 65% |
| [Claude Opus 4.7](https://zurelay.com/models/claude-opus-4-7) | Anthropic | $5.00 / $25.00 | $1.78 / $8.93 | 64% |
| [Claude Opus 4.8](https://zurelay.com/models/claude-opus-4-8) | Anthropic | $5.00 / $25.00 | $2.40 / $12.00 | 52% |
| [Claude Opus 4.6](https://zurelay.com/models/claude-opus-4-6) | Anthropic | $5.00 / $25.00 | $2.40 / $12.00 | 52% |
| [GPT-6 Astra](https://zurelay.com/models/gpt-6-astra) | OpenAI | $10.00 / $50.00 | $2.50 / $12.50 | 75% |
| [Kimi K3.1 Pro Highspeed](https://zurelay.com/models/kimi-k3.1-pro-highspeed) | Moonshot AI | $4.00 / $20.00 | $3.30 / $16.50 | 18% |
| [Claude Fable 5.1](https://zurelay.com/models/claude-fable-5-1) | Anthropic | $10.00 / $50.00 | $3.50 / $17.50 | 65% |
| [Claude Fable 5](https://zurelay.com/models/claude-fable-5) | Anthropic | $10.00 / $50.00 | $3.50 / $17.50 | 65% |

## Image models

Per image, at the smallest size each model makes.

| Model | Lab | List price | Zurelay | Saving |
| --- | --- | --- | --- | --- |
| [Nano Banana 2.1](https://zurelay.com/models/nano-banana-2.1) | Google | $0.0336 | $0.03 | 11% |
| [Nano Banana Pro](https://zurelay.com/models/nano-banana-pro) | Google | $0.134 | $0.035 | 74% |
| [Nano Banana 2](https://zurelay.com/models/nano-banana-2) | Google | $0.067 | $0.025 | 63% |
| [Nano Banana 2 Lite](https://zurelay.com/models/nano-banana-2-lite) | Google | $0.0336 | $0.016 | 52% |
| [GPT Image 2.5 Flare](https://zurelay.com/models/gpt-image-2.5-flare) | OpenAI | $0.0527 | $0.028 | 47% |
| [GPT Image 2.5 Sunburst](https://zurelay.com/models/gpt-image-2.5-sunburst) | OpenAI | $0.0527 | $0.026 | 51% |
| [GPT Image 2](https://zurelay.com/models/gpt-image-2) | OpenAI | $0.053 | $0.02 | 62% |
| [Grok Imagine Image 2.0](https://zurelay.com/models/grok-imagine-image-2.0) | xAI | $0.06 | $0.045 | 25% |
| [FLUX 3 Image](https://zurelay.com/models/flux-3-image) | Black Forest Labs | $0.048 | $0.04 | 17% |

## Video models

Per second of video. The comparison is fal.ai's price, or the lab's own where it sells video.

| Model | Lab | Compared with | Zurelay | Saving |
| --- | --- | --- | --- | --- |
| [Seedance 2.5](https://zurelay.com/models/seedance-2.5) | ByteDance | $0.215/s at 480p (fal.ai) | from $0.135/s | 37% |
| [Seedance 2.0](https://zurelay.com/models/seedance-2.0) | ByteDance | $0.141/s at 480p (fal.ai) | from $0.097/s | 31% |
| [Seedance 2.0 Fast](https://zurelay.com/models/seedance-2.0-fast) | ByteDance | $0.113/s at 480p (fal.ai) | from $0.074/s | 34% |
| [Seedance 2.0 Mini](https://zurelay.com/models/seedance-2.0-mini) | ByteDance | $0.0703/s at 480p (fal.ai) | from $0.047/s | 33% |
| [Gemini Omni Flash](https://zurelay.com/models/gemini-omni-flash) | Google | $0.101/s at 720p (Google) | from $0.042/s | 59% |
| [Kling 3.0](https://zurelay.com/models/kling-3.0) | Kuaishou | — | from $0.125/s | — |
| [Wan 3.0](https://zurelay.com/models/wan-3.0) | Alibaba | — | from $0.05/s | — |
| [Veo 3.1 Fast](https://zurelay.com/models/veo-3.1-fast) | Google | $0.10/s at 720p (Google) | from $0.025/s | 75% |
| [Grok Imagine Video 1.5](https://zurelay.com/models/grok-imagine-video-1.5) | xAI | $0.08/s at 480p (xAI) | from $0.071/s | 11% |
| [Vidu Q3 Turbo](https://zurelay.com/models/vidu-q3-turbo) | ShengShu | $0.035/s at 540p (Vidu) | from $0.03/s | 14% |
| [PixVerse V6](https://zurelay.com/models/pixverse-v6) | PixVerse | $0.035/s at 360p (PixVerse) | from $0.021/s | 14% |
| [MiniMax H3](https://zurelay.com/models/minimax-h3) | MiniMax | $0.08/s at 768p (MiniMax) | from $0.065/s | 19% |

## Fields

- `price` / `reference_price`: chat and speech per 1M tokens (`input_per_1m`, `output_per_1m`, `cached_input_per_1m`); images `per_image` and `per_image_by_size`; video `per_second_from` and `per_second_by_resolution`.
- `compared_with`: `list` for the lab's list price, or for video the provider whose price is the comparison.
- `saving_percent`: how far below the comparison Zurelay's price is (output tokens for chat, the smallest size for images).

Tools: an [LLM API cost calculator](https://zurelay.com/llm-cost-calculator) prices a month of any workload on every model, and [the cheapest LLM APIs](https://zurelay.com/cheapest-llm-api) ranks them.

## License

Data: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Use it, share it and build on it, with credit to Zurelay and a link to <https://zurelay.com/models>. Code in `scripts/`: MIT.
