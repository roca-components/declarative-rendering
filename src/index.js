/* eslint-env browser */
import render from "./template";

export default class MyComponent extends HTMLElement {
	connectedCallback() {
		let ui = render("Hello World", "lorem ipsum");
		this.appendChild(ui);
	}
};

customElements.define("my-component", MyComponent);
