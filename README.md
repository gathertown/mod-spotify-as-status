# Gather mod example: set status to Spotify

a Gather mod which sets your status to your currently playing track on spotify

check out the [websocket API docs](https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063) for more!

## setup

prereq: have NodeJS and npm installed

run `npm install`

put your Gather and Spotify API keys in a file named `api-key.js` like so:

```js
export const API_KEY = "your-api-key-here";
export const SPOTIFY_KEY = "your-very-long-spotify-token-here";
```

get the gather one here: https://gather.town/apiKeys
and spotify here: https://developer.spotify.com/console/get-users-currently-playing-track/

replace the `SPACE_ID` in index.ts with your own spaceId

## running

`npm run start`
