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
        <img src="static/images/home-main-sm.jpg" class="home-photo" alt="Home photo">
        <button class="home-btn-search"><i class="fa-solid fa-magnifying-glass"></i> Start Exploring!</button>
        </div>`
    }
}