
var CanvasW = 1000;
var CanvasH = 500;
var mouseDown = false;

var penX = 0;
var penY = 0;
var penWidth = 10;
var ctx;

var currentColor = "#0000ff";

/*
 * 描画部門
 */

function draw() {
	if (!ctx){
		var canvas = document.getElementById('canvas1');
		ctx = canvas.getContext('2d');
	}

	ctx.beginPath();
	ctx.fillStyle = currentColor;
	ctx.arc(penX, penY, penWidth, 0, Math.PI*2, false);
	ctx.fill();
}

function clearCanvas(id){
	//println("clearCanvas");
	var canvas = document.getElementById(id);
	var c = canvas.getContext('2d');
	//クリアだと背景が白ではないな
	//c.clearRect(0, 0, CanvasW, CanvasH);
	c.fillStyle = "#ffffff";
	c.fillRect(0, 0, CanvasW, CanvasH);
}

/*
 * マウスイベント処理部門
 */

function onMouseMove(x, y){
	penX = x;
	penY = y;
	//マウスボタンを押している場合は描画する
	if (mouseDown){
		draw();
	}
	debug();
}

function onMouseDown(b){
	mouseDown = b;
	if (mouseDown){
		//println("onMouseDown:"+b);
		//クリックした（ドラッグしていない）だけでも描画する。
		onMouseMove(penX, penY);
	}
	debug();
}

/*
 * 色選択
 */

function tdClicked(td){
	currentColor = td.style.background;
	println("tdClicked:"+currentColor);
	document.getElementById("IDCurrentColor").style.background = currentColor;
}


/*
 * デバッグ
 */
function debug(){
	var s = penX +", "+ penY + " " + (mouseDown ? "押した" : "押していない");
	document.getElementById("mouse_state").innerHTML = s;
}
function println(s){
	var text = document.getElementById("stdout").value;
	text += s + "\n";
	document.getElementById("stdout").value = text;
}
function clearTextarea(id){
	document.getElementById(id).value = "";
}
