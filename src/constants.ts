import dotenv from "dotenv"

dotenv.config()

const { TWITTER_USERNAME, TWITTER_PASSWORD } = process.env

export const credentials = {
  twitter: {
    username: TWITTER_USERNAME || "",
    password: TWITTER_PASSWORD || "",
  },
}

export const twitterUrl = "https://twitter.com/"
export const authFile = "playwright/.auth/user.json"
export const twitterProfileUrl = `https://twitter.com/${credentials.twitter.username}}`
