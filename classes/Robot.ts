import {reactive} from "#imports";

export class Robot {
    name=''
    color=''

    _x = 0
    _y = 0

    constructor() {
        const proxy = reactive(this)
        window.Robo = proxy
        return proxy
    }

    move() {
        // TODO: do not increment if blocked
        // TODO: land if not blocked below
        this._x++

    }

    jump() {
        this._y++
    }
}