import {reactive} from "#imports";

export class Level {
    obstacles = new Set<number>()

    constructor(props:Level) {
        const proxy = reactive(this)
        Object.assign(proxy, props)
        return proxy
    }
}