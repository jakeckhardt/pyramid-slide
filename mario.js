let pyramid = document.getElementById("pyramid");
let symbol = document.getElementById("select");


function drawPyramid() {
    let num = document.getElementById("num").value;
    var brick = symbol.value;
    brick = brick + brick;
    var spaces = ".";
    var py_space = num - 1;
    py_space = py_space;
    pyramid.innerHTML = "";
    for (var i = 0; i < num; i++) {
      let pyraLine = document.createElement("P");
      pyraLine.style.display = "block" ;
    	big_spaces = spaces.repeat(py_space);
    	pyraLine.textContent = big_spaces + brick;
    	brick += symbol.value;
    	py_space = py_space - 1;
      pyramid.appendChild(pyraLine);
    }
    let construction = document.getElementById("construction");
    construction.style.display = "none";

}

drawPyramid(num);