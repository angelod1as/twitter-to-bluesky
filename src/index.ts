// Import the Chromium browser into our scraper.
import { chromium } from "playwright"
import { authTwitter } from "./auth-twitter.ts"
import { constants } from "./constants.ts"
import { checkCredentials } from "./check-credentials.ts"
import { getTwitterFollowingCount } from "./get-twitter-following-count.ts"
import { getTwitterFollowingHandles } from "./get-twitter-following-handles.ts"

checkCredentials()

const newBrowser = await chromium.launch({
  headless: false,
})

const browser = await newBrowser.newContext({
  storageState: `./${constants.authFile}`,
})

const page = await browser.newPage()

// HERE
await page.goto(constants.twitter.rootUrl)
await authTwitter(page)
const followersCount = await getTwitterFollowingCount(page)

await getTwitterFollowingHandles(page, followersCount)

await browser.close()
