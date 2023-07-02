import { Page } from "playwright"
import { constants } from "./constants.ts"

const { twitter, authFile } = constants

export const authTwitter = async (page: Page) => {
  // Already logged in
  if (page.url().includes("home")) {
    return
  }

  await page
    .getByLabel("Phone, email address, or username")
    .fill(twitter.username)
  await page.getByRole("button", { name: "Next" }).click()
  await page.getByLabel("Password", { exact: true }).fill(twitter.password)
  await page.getByTestId("LoginForm_Login_Button").click()

  await page.waitForURL("**/home", {
    timeout: 1000 * 60 * 10, // 10 minutes
  })

  await page.context().storageState({ path: `${authFile}` })
}
