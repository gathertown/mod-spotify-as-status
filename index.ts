import axios from "axios";
import { API_KEY, SPOTIFY_KEY } from "./api-key";
import { Game } from "@gathertown/gather-game-client";
global.WebSocket = require("isomorphic-ws");

const SPACE_ID = "oxrhEtb3sV7VutbQ\\GatherOffice";

// setup

const game = new Game(() => Promise.resolve({ apiKey: API_KEY }));
game.connect(SPACE_ID); // replace with your spaceId of choice
game.subscribeToConnection((connected) => console.log("connected?", connected));

//

// check every 5s

setInterval(async () => {
	const res = await axios
		.get("https://api.spotify.com/v1/me/player/currently-playing", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${SPOTIFY_KEY}`,
			},
		})
		.catch((e) => {
			console.error(e);
			process.exit(0);
		});

	console.log(res.data.item.name);

	game.engine.sendAction({
		$case: "setEmojiStatus",
		setEmojiStatus: {
			emojiStatus: "🎶",
		},
	});
	game.engine.sendAction({
		$case: "setTextStatus",
		setTextStatus: {
			textStatus: res.data.item.name,
		},
	});
}, 5000);
