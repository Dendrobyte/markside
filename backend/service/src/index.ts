// Define Env interface for environment variables
interface Env {
	'YOUTUBE_API_KEY': string
}

// In theory we could cache this response and only hit the API uniquely ever day by holding on to the timestamp
// But I don't expect traffic all that much
// This returns the video URL
async function getLatestVideoFromChannel(apiKey: string, channelId: string): Promise<string> {
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

		switch (path) {
			case '/health': {
				return new Response("Healthy!", {
					status: 200
				})
			}
			case '/youtube_latest_lifestyle': {
				let responseUrl: string = await getLatestVideoFromChannel(ytApiKey, "UCh7mi5sI3BSzKReLzXpgimA");
				let response = new Response(responseUrl, {
					status: 200
				});
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
	},
};
