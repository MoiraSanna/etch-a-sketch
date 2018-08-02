const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");

function createSquare(size) {
	let div = document.createElement("div");

	div.classList.add("square");
	div.style.width = "${size}px";
	div.style.height = "${size}px";

	return div;
}
 
function createGrid(side) {
	for (let i = 0; i < side * side; i++) {
		container.appendChild(createSquare(containerSize / side));
	}
} 

createGrid();