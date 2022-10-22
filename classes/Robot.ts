import {reactive} from "#imports"
import {Level} from "~/classes/Level"

export class Robot {
  name = ""
  color = ""

  _x = 0
  _y = 0

  _level: Level

  constructor(config: { level: Level }) {
    this._level = config.level
    const proxy = reactive(this)
    window.Robo = proxy
    return proxy
  }

  move() {
    // check for obstacle
    if (!(this._y > 0) && this._level.obstacles.has(this._x + 1)) {
      console.log("cannot move, obstacle in the way")
      return
    }

    // move
    this._x++

    // land if possible
    if ((this._y > 0) && !this._level.obstacles.has(this._x)) {
      this._y--
    }
  }

  jump() {
    // TODO: climb? up right? prevent jump spam and gliding right over whole level
    this._y++
  }
}
