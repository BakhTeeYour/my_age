import MY_IMG from '../../assets/photo.jpg'

export class MyAgeBlock {
    #container

    constructor() {
        this.#container = document.createElement('div');
        this.#container.className = 'age-block';
    }

    render() {
        const mainTitleEl = document.createElement('h1');
        mainTitleEl.className = 'main-title';
        mainTitleEl.textContent = 'Bakh Achelov';

        const myImgEl = document.createElement('img');
        myImgEl.className = 'my-image';
        myImgEl.src = MY_IMG;

        const paragraphEl = document.createElement('p');
        paragraphEl.className = 'paragraph';
        paragraphEl.textContent = 'С момента рождения прошло'

        this.#container.append(mainTitleEl, myImgEl, paragraphEl);
        return this.#container;
    }
}