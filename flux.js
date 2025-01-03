class Widget {
	constructor(tag, ...children){
		this.tag = tag;
		this.children = children
	}

	createTag(){
		const element = document.createElement(this.tag);
		for (const child in this.children){
			element.appendChild(child);
		}
		return element;
	}
}

export default Widget;
