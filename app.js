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

function updateScore(player, opp) {
	if(!gameOver) {
		player.score += 1
		if(player.score === playTo) {
			gameOver = true
			player.display.classList.add('has-text-success')
			opp.display.classList.add('has-text-danger')
			player.button.disabled = true
			opp.button.disabled = true
		}
		player.display.textContent = player.score
	}
}

