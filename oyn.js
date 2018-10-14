function select(element){
	var siblings = element.parentElement.getElementsByClassName("choice");
	element.parentElement.classList.add("choice_made")
	for (let o of siblings){
		o.classList.remove("selected");
	}
	element.classList.add("selected")
}

function load_button(element){
	element.classList.add("loading")
}