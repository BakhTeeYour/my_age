//import {getCurrentDateFormat, getPreciseDateDiff} from '../core/utils/date'
import * as DateUtils from '../core/utils/date';

export class TimerBlock {
    #date
    #timerContainer
    #timerText

    constructor(date) {
        this.#date = date;
        this.#timerContainer = document.createElement('div');
        this.#timerText = document.createElement('h2');
    }

    #getTimerContent() {
        return DateUtils.getPreciseDateDiff(new Date, this.#date);

    }

    #enableDateUpdate() {
        setInterval(() => {
            this.#timerText.textContent = this.#getTimerContent();
        })
    }

    render() {
        this.#timerContainer.id = 'timer';
        this.#timerText.className = 'timer-text';
        this.#timerText.textContent = this.#getTimerContent();

        const currentDate = document.createElement('div');
        currentDate.className = 'current-date';
        const currentDateFormat = DateUtils.getCurrentDateFormat(new Date());
        currentDate.textContent = `Сегодня: "${currentDateFormat}"`;

        this.#timerContainer.append(this.#timerText, currentDate);
        this.#enableDateUpdate();
        return this.#timerContainer;
    }
}