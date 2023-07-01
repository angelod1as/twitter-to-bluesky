// Import the Chromium browser into our scraper.
import { chromium } from "playwright"
import { auth } from "./auth.ts"
import { authFile, twitterUrl } from "./constants.ts"
import { checkCredentials } from "./check-credentials.ts"

checkCredentials()

const newBrowser = await chromium.launch({
  headless: false,
})

const browser = await newBrowser.newContext({
  storageState: `./${authFile}`,
})

const page = await browser.newPage()
await page.goto(twitterUrl)
await auth(page)

// Open a new page / tab in the browser.

// Tell the tab to navigate to the JavaScript topic page.

// Pause for 10 seconds, to see what's going on.
// await page.waitForTimeout(1000)

// Turn off the browser to clean up after ourselves.
// await browser.close()
