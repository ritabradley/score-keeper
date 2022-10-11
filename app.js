const player1 = {
	score: 0,
	button: document.getElementById("p1Button"),
	display: document.getElementById("p1Display")
}
const player2 = {
	score: 0,
	button: document.getElementById("p2Button"),
	display: document.getElementById("p2Display")
}

const resetBtn = document.getElementById("reset")
const playToSelect = document.getElementById("playto")
let playTo = 3
let gameOver = false

