import {reactive} from "#imports"
import {Level} from "~/classes/Level"

export class Robot {
  name = ""
  color = ""

  _logMsg = ""
  _x = 0
  _y: 0 | 1 = 0
  _level: Level

  constructor(config: { level: Level }) {
    this._level = config.level
    const proxy = reactive(this)
    // @ts-ignore
    window.Robo = proxy
    return proxy
  }

  log(msg: string) {
    console.log(msg)
    this._logMsg = msg
  }

  move() {
    // check for obstacle
    if (this._y === 0 && this._level.obstacles.has(this._x + 1)) {
      console.log("cannot move, obstacle in the way")
      return
    }

    // move
    this._x++

    // fall if possible
    if ((this._y === 1) && !this._level.obstacles.has(this._x)) {
      this._y = 0
    }
  }

  climb() {
    // check for obstacle, then climb
    if (this._y === 0 && this._level.obstacles.has(this._x + 1)) {
      this._y = 1
      this._x++
    } else {
      console.log("cannot climb, nothing to climb on")
    }
  }
}
