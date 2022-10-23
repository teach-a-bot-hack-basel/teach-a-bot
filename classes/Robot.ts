import {reactive} from "#imports"
import {Level} from "~/classes/Level"

export class Robot {
  name = ""
  private _color = ""

  get color(){
    return this._color
  }

  set color(value){
    this._color = value
    document.getElementById("head").style.fill = this._color
    document.getElementById("body").style.fill = this._color
  }


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

  isBlocked(verbose = true) {
    const check = this._y === 0 && this._level.obstacles.has(this._x + 1)
    if (verbose) console.log("blocked: " + check)
    return check
  }

  isMounted(verbose = true) {
    const check = this._y === 1 && this._level.obstacles.has(this._x)
    if (verbose) console.log("mounted: " + check)
    return check
  }

  hasReachedGoal() {
    return this._x >= this._level.goal
  }

  move() {
    if (this.isBlocked(false)) {
      console.log("cannot move, obstacle in the way")
      return
    }

    console.log('robot moves')
    this._x++

    if (!this.isMounted(false)) {
      this._y = 0
    }
  }

  climb() {
    if (this.isBlocked(false)) {
      console.log('robot climbs')
      this._y = 1
      this._x++
    } else {
      console.log("cannot climb, nothing to climb on")
    }
  }
}
