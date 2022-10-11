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

player1.button.addEventListener('click', () => updateScore(player1, player2))
player2.button.addEventListener('click', () => updateScore(player2, player1))

playToSelect.addEventListener('change', () => {
	playTo = parseInt(playToSelect.value)
	console.log(playTo)
	reset()
})

resetBtn.addEventListener('click', reset)

function reset() {
	gameOver = false
	for (let player of [player1, player2]) {
		player.score = 0
		player.display.textContent = '0'
		player.button.disabled = false
		player.display.classList.remove('has-text-success', 'has-text-danger')
	}
}