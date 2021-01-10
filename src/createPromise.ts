import { ControllablePromise, CreatePromise } from "./types"

export const createPromise: CreatePromise = () => {
  let resolved = false
  let resolvedWith = undefined
  let resolver
  let rejected = false
  let rejectedWith = undefined
  let rejector

  const promise = new Promise((resolve, reject) => {
    resolver = resolve
    rejector = reject

    if (resolved) {
      resolver(resolvedWith)
    } else if (rejected) {
      rejector(rejectedWith)
    }
  }) as ControllablePromise

  promise["resolve"] = (result) => {
    if (resolver) {
      resolver(result)
    } else {
      resolved = true
      resolvedWith = result
    }
  }

  promise["reject"] = (reason) => {
    if (rejector) {
      rejector(reason)
    } else {
      rejected = true
      rejectedWith = reason
    }
  }

  return promise
}
