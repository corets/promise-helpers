import { createPromise } from "./createPromise"
import { createTimeout } from "./createTimeout"

describe("createPromise", () => {
  it("resolves a promise", async () => {
    const promise = createPromise<string>()
    let status = "pending"

    promise.then((result) => (status = `resolved ${result}`))

    expect(promise).toBeDefined()

    await createTimeout(0)

    expect(status).toBe("pending")

    promise.resolve("result")

    await createTimeout(0)

    expect(status).toBe("resolved result")

    promise.resolve("another result")

    await createTimeout(0)

    expect(status).toBe("resolved result")
  })

  it("rejects a promise", async () => {
    const promise = createPromise<string>()
    let status = "pending"

    promise.catch((result) => (status = `rejected ${result}`))

    expect(promise).toBeDefined()

    await createTimeout(0)

    expect(status).toBe("pending")

    promise.reject("reason")

    await createTimeout(0)

    expect(status).toBe("rejected reason")

    promise.reject("another reason")

    await createTimeout(0)

    expect(status).toBe("rejected reason")
  })
})
