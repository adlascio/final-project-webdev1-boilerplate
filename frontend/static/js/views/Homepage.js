import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
        console.log(document.location);
    }

    async getHTML() {
        // return "<img src='/static/a.jpg'>";
        return `
        <div class="background">
            <video muted autoplay loop width="100%" src="/static/media/mixkit-hand-turning-a-luminous-earth-globe-in-the-dark-21607.mp4"></video>
        </div>
        <div onclick="window.location.href='/countries';"  class="background-content">
            <div class="content">
                <h1>
                    explore the world
                </h1>
                <div class="button">
                    begin
                </div>
            </div>
        </div>
        `;
    }
}