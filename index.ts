import { API_KEY, SPACE_ID, CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, REFRESH_TOKEN } from "./api-key";
import { EngineAuth, Game } from "@gathertown/gather-game-client";
global.WebSocket = require("isomorphic-ws");
const Updater = require("spotify-oauth-refresher");

// token refresher setup
const api = new Updater({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET });
api.setAccessToken(ACCESS_TOKEN);
api.setRefreshToken(REFRESH_TOKEN);

// gather game client setup
const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY } as EngineAuth));
game.connect();
game.subscribeToConnection((connected) => console.log("connected?", connected));

// check every 5s
setInterval(async () => {
  const res = await api.request({
    url: "https://api.spotify.com/v1/me/player/currently-playing",
    method: "get",
    authType: "bearer",
  });

  let playing = "";
  let emoji = "";

  if (res.data.is_playing === true) {
    if (res.data.currently_playing_type === "track") {
      playing =
        res.data.item.name + " ∙ " + res.data.item.artists[0].name + " (Spotify)";
      emoji = "🎶";
    } else if (res.data.currently_playing_type === "episode") {
      playing = "listening to some podcast (Spotify)";
      emoji = "🎧";
    }
    else console.log("unexpected value in 'currently_playing_type'")
  }
  else { // listening to nothing
    playing = "";
    emoji = "";
  }; 

  if (playing !== "") {
    console.log(playing);
  }
  else console.log("stopped listening");

  game.sendAction({
    $case: "setEmojiStatus",
    setEmojiStatus: {
      emojiStatus: emoji,
    },
  });
  game.sendAction({
    $case: "setTextStatus",
    setTextStatus: {
      textStatus: playing,
    },
  });
}, 5000);