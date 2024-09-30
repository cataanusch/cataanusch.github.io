const playerStart = new Tone.Player("start.mp3").toDestination();
const playerFalling = new Tone.Player("falling.mp3").toDestination();
const playerHeart = new Tone.Player("heart.mp3").toDestination();

let currentPlayer = null;

// Truquito para que no se reproduzcan dos canciones al mismo tiempo :3

const playSample = async (player) => {
    try {
        if (Tone.context.state !== "running") {
            await Tone.start();
        }
        if (currentPlayer && currentPlayer !== player) {
            currentPlayer.stop();
        }
        player.start();
        currentPlayer = player;
    } catch (error) {
        console.error("Oh no, un error fatal :(", error);
    }
};

document.getElementById("boton-start").addEventListener("click", () => {
    playSample(playerStart);
});

document.getElementById("boton-falling").addEventListener("click", () => {
    playSample(playerFalling);
});

document.getElementById("boton-heart").addEventListener("click", () => {
    playSample(playerHeart);
});




