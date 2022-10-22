import * as lodash from "lodash"
import * as remeda from "remeda"

export const fn = new (class {
  random = lodash.random
  sum = lodash.sum

  pipe = remeda.pipe

  // sleep for ms milliseconds
  sleep(ms: number) {
    return new Promise((res) => setTimeout(res, ms))
  }
})()
