export function createElement(tag, params, ...children) {
	let node = document.createElement(tag);

	Object.keys(params || {}).map(param => {
		let value = params[param];
		if(value === true) { // assume boolean attribute (e.g. `<input … autofocus>`)
			value = "";
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
		}

		if(child.substr) {
			node.textContent = child; // FIXME: clobbers prior siblings
		} else {
			node.appendChild(child);
		}
	});

	return node;
}
