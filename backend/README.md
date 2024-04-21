# Markside Backend

Because I want to hit the YouTube API, and maybe have some more dynamic way of fetching information (i.e. active projects), we need a small backend.

This is a really small backend hosted on a [Cloudflare Worker](https://developers.cloudflare.com/workers/), and deployed whenever the `main` branch updates. That's why this is just a scrappy one-file backend.

If for some reason you want to pull this to run or learn from it, there's a `.env` file I have locally with the respective environment variables (i.e. YOUTUBE_API_KEY). Copy the stuff below into a `.env` within this `backend` folder and get your respective API keys.

```bash
YOUTUBE_API_KEY=123abc
```
