import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        const title = document.getElementById("app");
        title.innerHTML = `
        <h1 class="home-heading">Where in the world?</h1>
        <button class="home-btn-search">Start Searching!</button>`
        return `
        <div id="container">
          ${div.innerHTML}
        </div>`
        // return "<h1>Home</h1>";
    }
}