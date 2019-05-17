import { JSDOM } from "jsdom";

export default class Parser {
    protected html: HTMLDocument;

    constructor(html: string) {
        const { document } = new JSDOM().window;
        this.html = document.implementation.createHTMLDocument('Schedule');
        this.html.body.innerHTML = html;
    }
}
