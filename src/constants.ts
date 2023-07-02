import dotenv from "dotenv"

dotenv.config()

const { TWITTER_USERNAME, TWITTER_PASSWORD } = process.env

const buildTwitterCredentials = () => {
  const rootUrl = "https://twitter.com/"
  const homeUrl = `${rootUrl}${TWITTER_USERNAME}`
  const followingUrl = `${homeUrl}/following`

  return {
    username: TWITTER_USERNAME || "",
    password: TWITTER_PASSWORD || "",
    rootUrl,
    homeUrl,
    followingUrl,
  }
}

export const constants = {
  authFile: "playwright/.auth/user.json",
  twitter: buildTwitterCredentials(),
}
