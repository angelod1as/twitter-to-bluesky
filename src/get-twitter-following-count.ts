import { Page } from "playwright"
import { constants } from "./constants.ts"

const throwError = () => {
  throw new Error(`
  Something went wrong while getting your follower numbers.
  Your followers count returned less than 1 (or a different value than a number) in our script.
`)
}

export const getTwitterFollowingCount = async (page: Page) => {
  await page.goto(constants.twitter.homeUrl)
  await page.waitForSelector('a[href$="following"]')

  const followingString = await page.locator('a[href$="following"]').innerText()

  // Should return X.XXX followers
  if (!followingString) throwError()

  const followingNumber = Number(
    followingString.split(" ")[0].replaceAll(".", ""),
  )

  if (isNaN(followingNumber) || followingNumber === 0) throwError()

  return followingNumber
}
