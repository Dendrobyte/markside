// Define Env interface for environment variables
interface Env {
	'YOUTUBE_API_KEY': string
	'LAST_CHECKED_DATE_TS': number
	'LIFESTYLE_VID_ID': string
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
export default {

	async fetch(req: Request, env: Env) {
		let ytApiKey: string | undefined = env.YOUTUBE_API_KEY;
		if (ytApiKey === undefined){
			return new Response('YouTube API Key Undefined', { status: 404 });
		}

		let url = new URL(req.url);
		let path = url.pathname.replace(/[/]$/, '');

		// Check stored date to see if we should use storage
		let useCache: boolean = false
		let currTime: number = (new Date()).getTime() / 1000;
		let storedDate: number = env.LAST_CHECKED_DATE_TS
		if (storedDate === undefined) {
			env.LAST_CHECKED_DATE_TS = currTime
		}

		const timeDiff: number = Math.ceil((currTime - env.LAST_CHECKED_DATE_TS));
		if (timeDiff > 86400) {
			env.LAST_CHECKED_DATE_TS = currTime
		}
		useCache = timeDiff >= 86400 ? false : true;

		switch (path) {
			case '/health': {
				let date = env.LAST_CHECKED_DATE_TS
				return new Response(`Healthy! Date in env: ${date} and usecache is ${useCache} while current vid thing is ${env.LIFESTYLE_VID_ID}`, {
					status: 200
				})
			}

			// TODO: there is some mad refactoring possible here lol
			case '/youtube_latest_lifestyle': {
				let channelId: string = "UCh7mi5sI3BSzKReLzXpgimA"

				// In case of resets or anything
				useCache = env.LIFESTYLE_VID_ID === undefined ? false : useCache

				let responseVideoId: string = useCache ? env.LIFESTYLE_VID_ID : await getLatestVideoFromChannel(ytApiKey, channelId);
				let response = new Response(responseVideoId, {
					status: 200
				});
				if (useCache === false) {
					env.LIFESTYLE_VID_ID = responseVideoId // Update it
				}
				response.headers.set("Access-Control-Allow-Origin", "*")
                response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				response.headers.set("Access-Control-Allow-Headers", "*")
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
