import { createElement as createDOMNode } from "./dom";

export default (title, desc) => <div>
	<h3>{title}</h3>
	<p>{desc}</p>
</div>;
