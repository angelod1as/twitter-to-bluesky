import { credentials } from "./constants.ts"

export const checkCredentials = () => {
  if (!credentials.twitter.password || !credentials.twitter.username) {
    throw new Error(
      "Did you run 'yarn setup'? It sets up your credentials automatically.\nRun it or do it manually:\nYou must set the Twitter username and password in the .env file, following the .env.example file\n\n",
    )
  }
}
