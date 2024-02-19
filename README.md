# Gather mod example: set status to Spotify

a Gather mod which sets your status to your currently playing track on spotify

check out the [websocket API docs](https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063) for more!

## setup

prereq: have NodeJS and npm installed

run `npm install`

put your [Gather API key](https://gather.town/apiKeys), -spaceId, [Spotify API credentials](https://developer.spotify.com/dashboard/applications) and [-tokens](https://developer.spotify.com/console/get-users-currently-playing-track/) in a file named `api-key.ts` like so:

```ts
export const API_KEY = "your-api-key-here";
export const SPACE_ID = "gatherSpaceId\\gatherSpaceName";
export const CLIENT_ID = "your-spotify-client-id";
export const CLIENT_SECRET = "your-spotify-client-secret";
export const ACCESS_TOKEN = "your-very-long-spotify-token-here";
export const REFRESH_TOKEN = "your-very-long-spotify-refresh-token-here";
```

## running

`npm run start`

## further information

- [Gather Websocket API docs](https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063)
- [Ben Wiz: How to create a Spotify refresh token the easy way](https://benwiz.com/blog/create-spotify-refresh-token/)
- [Spotify dev guide: Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/code-flow/)
- [Matthew Stead's Spotify OAuth Refresher](https://github.com/matievisthekat/spotify-oauth-refresher)
- [Alec Chen's spotify-refresh-token project](https://github.com/alecchendev/spotify-refresh-token)
