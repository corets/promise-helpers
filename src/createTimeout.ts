import { CreateTimeout } from "./types"

export const createTimeout: CreateTimeout = async (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}
