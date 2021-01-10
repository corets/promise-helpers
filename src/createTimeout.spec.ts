import { createTimeout } from "./index"

describe("createTimeout", () => {
  it("creates timeout", async () => {
    await createTimeout(5)
  })
})
