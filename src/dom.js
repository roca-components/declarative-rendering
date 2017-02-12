export function createElement(tag, params, ...children) {
	let node = document.createElement(tag);

	Object.keys(params || {}).forEach(param => {
		let value = params[param];
		// special-casing for boolean attributes (e.g. `<input … autofocus>`)
		if(value === true) {
			value = "";
		} else if(value === false) {
			return;
		}

		if(value.substr) { // attribute
			node.setAttribute(param, value);
		} else { // property
			node[param] = value;
		}
	});

	children.forEach(child => {
		if(!child) {
			return;
		} else if(child.substr) {
			child = document.createTextNode(child);
		}
		node.appendChild(child);
	});

	return node;
}
