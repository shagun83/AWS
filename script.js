
function showSurprise() {

    const messages = [
        "You are a blessing to this universe! 💖",
        "Your smile makes the world brighter! 🌟",
        "You deserve all the happiness in the world! 🥰",
        "Never forget how special you are! ✨",
        "The universe is lucky to have you! 🌌"
    ];

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    document.getElementById("surprise").innerText =
        messages[randomIndex];
}
