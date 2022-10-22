import {reactive} from "#imports";

export class Robot {
    name=''
    color=''

    _x = 0
    _midAir = false

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
        this._midAir = true
    }
}