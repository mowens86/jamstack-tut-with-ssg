const vibes = [
    "... and you are awesome!",
    "... have a wonderful day",
    "... and you've got this!",
    "... and Sniper is awesome!"
];

// Choose a random good vibe
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// Display a good vibe
document.querySelector(".vibe").append(vibe);