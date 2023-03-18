import {MyAgeBlock} from "./age-block";
import {TimerBlock} from "./timer-block";
import {MY_BIRTH_DATE} from "../core/constants/settings"

export default class App {
    #jsBlock
    #timerBlock

    constructor() {
        this.#jsBlock = new MyAgeBlock();
        this.#timerBlock = new TimerBlock(new Date(MY_BIRTH_DATE));
    }

    run() {
        const myAgeBlock = this.#jsBlock.render();
        const timerBlock = this.#timerBlock.render();
        document.body.append(myAgeBlock, timerBlock);
    }
}