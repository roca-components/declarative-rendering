/* eslint-env browser */
import render from "./template";

class MyComponent extends HTMLElement {
	connectedCallback() {
		let ui = render("Hello World", "lorem ipsum");
		this.appendChild(ui);
	}
};
