import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        return `
        <div id="home-container">
        <h1 class="home-heading">Where in the world?</h1>
        <button class="home-btn-search">Start Searching!</button>
        </div>`
    }
}