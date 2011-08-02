
var CanvasW = 450;
var CanvasH = 350;
var mouseDown = false;

var penX = 0;
var penY = 0;
var penWidth = 10;
var ctx;

var currentColor = "#0000ff";

/*
 * �`�敔��
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
	println("clearCanvas");
	var canvas = document.getElementById(id);
	var c = canvas.getContext('2d');
	//�N���A���Ɣw�i�����ł͂Ȃ���
	//c.clearRect(0, 0, CanvasW, CanvasH);
	c.fillStyle = "#ffffff";
	c.fillRect(0, 0, CanvasW, CanvasH);
}

/*
 * �}�E�X�C�x���g��������
 */

function onMouseMove(x, y){
	penX = x;
	penY = y;
	//�}�E�X�{�^���������Ă���ꍇ�͕`�悷��
	if (mouseDown){
		draw();
	}
	debug();
}

function onMouseDown(b){
	mouseDown = b;
	if (mouseDown){
		//println("onMouseDown:"+b);
		//�N���b�N�����i�h���b�O���Ă��Ȃ��j�����ł��`�悷��B
		onMouseMove(penX, penY);
	}
	debug();
}

/*
 * �F�I��
 */

function tdClicked(td){
	currentColor = td.style.background;
	println("tdClicked:"+currentColor);
	document.getElementById("IDCurrentColor").style.background = currentColor;
}


/*
 * �f�o�b�O
 */
function debug(){
	var s = penX +", "+ penY + " " + (mouseDown ? "������" : "�����Ă��Ȃ�");
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