# Markside Backend

Because I want to hit the YouTube API, and maybe have some more dynamic way of fetching information (i.e. active projects), we need a small backend.

This is a really small backend hosted on a [Cloudflare Worker](https://developers.cloudflare.com/workers/), and deployed whenever the `main` branch updates so it's fairly scrappy.

If getting the EOF error locally, just re-deploy to CF :/

## Deploying (Local & Prod)

For me to remember how, haha.

Use `npx wrangler dev` in the `/service` folder to get started

## Contributing

If for some reason you want to pull this to run or learn from it, there's a `.env` file I have locally with the respective environment variables (i.e. YOUTUBE_API_KEY). Copy the stuff below into a `.env` within the `/service` folder and get your respective API keys. Commands should be run by the `service` metric. For Cloudflare, these are just done via wrangler.

```bash
YOUTUBE_API_KEY=123abc
```

> Secrets are environment variables. The difference is secret values are not visible within Wrangler or Cloudflare dashboard after you define them. This means that sensitive data, including passwords or API tokens, should always be encrypted to prevent data leaks. To your Worker, there is no difference between an environment variable and a secret. The secret’s value is passed through as defined.
As per [the docs](https://developers.cloudflare.com/workers/configuration/secrets/).
