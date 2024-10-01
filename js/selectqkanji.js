let butpc_eazy = document.getElementById("easypc");
let butpc_normal = document.getElementById("normalpc");
let butpc_hard = document.getElementById("hardpc");

butpc_eazy.addEventListener("click", activepc_easy);
butpc_normal.addEventListener("click", activepc_normal);
butpc_hard.addEventListener("click", activepc_hard);

let but_eazy = document.getElementById("easy");
let but_normal = document.getElementById("normal");
let but_hard = document.getElementById("hard");

but_eazy.addEventListener("click", active_easy);
but_normal.addEventListener("click", active_normal);
but_hard.addEventListener("click", active_hard);

let but_start = document.querySelector(".startbtn");
but_start.addEventListener("click", start);

let sel_dif = 0;
function activepc_easy() {
	butpc_eazy.classList.add("selectnow_dif");
	butpc_normal.classList.remove("selectnow_dif");
	butpc_hard.classList.remove("selectnow_dif");
	if (sel_dif == 1) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
	sel_dif = 1;
}

function activepc_normal() {
	butpc_eazy.classList.remove("selectnow_dif");
	butpc_normal.classList.add("selectnow_dif");
	butpc_hard.classList.remove("selectnow_dif");
	if (sel_dif == 2) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
	sel_dif = 2;
}

function activepc_hard() {
	butpc_eazy.classList.remove("selectnow_dif");
	butpc_normal.classList.remove("selectnow_dif");
	butpc_hard.classList.add("selectnow_dif");
	if (sel_dif == 3) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
	sel_dif = 3;
}
function active_easy() {
	but_eazy.classList.add("selectnow_difmb");
	but_normal.classList.remove("selectnow_difmb");
	but_hard.classList.remove("selectnow_difmb");
	if (sel_dif == 1) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
	sel_dif = 1;
}

function active_normal() {
	but_eazy.classList.remove("selectnow_difmb");
	but_normal.classList.add("selectnow_difmb");
	but_hard.classList.remove("selectnow_difmb");
	if (sel_dif == 2) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
	sel_dif = 2;
}

function active_hard() {
	but_eazy.classList.remove("selectnow_difmb");
	but_normal.classList.remove("selectnow_difmb");
	but_hard.classList.add("selectnow_difmb");
	if (sel_dif == 3) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
	sel_dif = 3;
}

function start() {
	if (sel_dif != 0) {
		localStorage.saveKey = sel_dif;
		window.location.href = "quizkanji.html";
	}
}
