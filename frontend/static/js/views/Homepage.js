import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        return `
        <div style="background-color: red">
            <button id="test">description</button>
        </div>
        `;
    }
}