import { Page } from "playwright"
import { constants } from "./constants.ts"

export const getTwitterFollowingHandles = async (
  page: Page,
  followingNumber: number,
) => {
  await page.goto(constants.twitter.followingUrl)

  // not the best selector, but kudos to Twitter for making this extra hard
  await page.waitForSelector('[data-testid="UserCell"]')

  // very imperative, but that's how I made it kinda work
  let elements: number = 0
  let contacts: string[] = []

  // This is not the best way, as I'm not 100% sure the elements will be equal the followingNumber
  // Also, in headless: false, it caps at around 600 people.
  while (elements < followingNumber) {
    console.log(`${elements} of ${followingNumber}`)

    await page.waitForTimeout(100)

    await page.evaluate(async () => {
      //@ts-ignore
      window.scrollTo(0, document.body.scrollHeight)
    })

    const list = await page.locator("span").allInnerTexts()

    list
      .filter((item) => item.startsWith("@"))
      .filter((item) => !contacts.includes(item))
      .forEach((item) => contacts.push(item))

    elements = contacts.length
  }
}
