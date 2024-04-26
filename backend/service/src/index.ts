import { DurableObject } from "cloudflare:workers"

// Define Env interface for environment variables
interface Env {
	'YOUTUBE_API_KEY': string
}

async function getLatestVideoFromChannel(apiKey: string, channelId: string): Promise<string> {
	// return "UaF7JIT3hXI" //- this needs to be cached, not sure why it's pinging so much
	let getUrl: string = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=1`

	let data: any = await fetch(getUrl).then(resp => {
		return resp.json()
	}).catch((e) => {
		return undefined
	})

	if (data === undefined) {
		return "There was an error fetching this content"
	}
	try {
		let videoInformation: any = data.items[0].id;
		let VIDEO_ID: string = videoInformation.videoId;
		return VIDEO_ID;
	} catch (err) {
		return "Errored out with err " + err + ".\nData from api is: " + JSON.stringify(data)
	}

}

function getLatestVideoWithKeyword(apiKey: string, channelId: string, keyword: string): string {
	// TODO: Implement to find last video with "VGT" in title, but that's all there really is up on Cowdino atm
	// let resp: string = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=10`
	return "Huzzah!"
}

// eslint-disable-next-line import/no-anonymous-default-export
export class Service extends DurableObject {
	ctx: DurableObjectState;
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env)
		this.ctx = ctx;
		this.env = env;
	}

	// @ts-ignore -- I still want env
	async fetch(req: Request, env: Env) {
		let ytApiKey: string | undefined = env.YOUTUBE_API_KEY;
		if (ytApiKey === undefined){
			return new Response('YouTube API Key Undefined', { status: 404 });
		}

		let url = new URL(req.url);
		let path = url.pathname.replace(/[/]$/, '');

		// Check stored date to see if we should use storage
		let useCache: boolean = false
		let currTime: Date = new Date();
		let storedDate: Date | undefined = await this.ctx.storage.get("lastCheckedDate")
		if (storedDate !== undefined) {
			const dayDiff: number = Math.ceil((currTime.getTime() - storedDate.getTime()) / (1000 * 60 * 60 * 24));
			useCache = dayDiff >= 1 ? false : true;
		}

		switch (path) {
			case '/health': {
				let date = await this.ctx.storage.get("lastCheckedDate")
				return new Response(`Healthy! Date in ctx: ${date}`, {
					status: 200
				})
			}

			// TODO: there is some mad refactoring possible here lol
			case '/youtube_latest_lifestyle': {
				let channelId: string = "UCh7mi5sI3BSzKReLzXpgimA"
				// Check request context for url

				let responseVideoId: string | undefined = useCache ? await this.ctx.storage.get(channelId) : await getLatestVideoFromChannel(ytApiKey, channelId);
				let response = new Response(responseVideoId, {
					status: 200
				});
				response.headers.set("Access-Control-Allow-Origin", "*")
                response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				response.headers.set("Access-Control-Allow-Headers", "*")
				this.ctx.storage.put(channelId, responseVideoId)
				return response
			}
			case '/youtube_latest_cowdino': {
				let responseUrl: string = await getLatestVideoFromChannel(ytApiKey, "UCNmheQMf9sK1Axv3NCEhbSA");
				let response = new Response(responseUrl, { status: 200 });
				response.headers.set("Access-Control-Allow-Origin", "*")
                response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				response.headers.set("Access-Control-Allow-Headers", "*")
				return response
			}
			case '/youtube_latest_vgt': {
				let responseUrl: string = await getLatestVideoWithKeyword(ytApiKey, "UCNmheQMf9sK1Axv3NCEhbSA", "VGT")
				return new Response(responseUrl, { status: 200 });
			}
			default: {
				return new Response('Not found', { status: 404 });
			}
		}
	}
};
