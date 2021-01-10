export type ControllablePromise<TResult = any> = Promise<TResult> & {
  resolve: (result?: TResult | PromiseLike<TResult>) => void
  reject: (reason?: any) => void
}

export type CreateTimeout = (delay: number) => Promise<void>
export type CreatePromise = <TResult = any>() => ControllablePromise<TResult>
