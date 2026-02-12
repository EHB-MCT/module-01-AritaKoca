const fortunes = [ // array want []
    "A fresh start will put you on your way.",
    "Breathe in, breathe out, code.",
    "Your creativity will lead you to success.",
    "Trust the process; the logic will click into place soon.",
    "You will conquer the infinite loop before it crashes your browser.",
    "Today is the day you actually understand how Git works.",
    "The error message is not judging you; it is trying to help.",
    "You love peace, harmony and ChatGPT",
    "Change is happening in your life, so commit often!",
    "You will inherit a large sum of money and an undocumented codebase",
    "Your hard work will pay off soon(-ish).",
    "The best is yet to come. A semester of Javascript awaits you."
];

// 1. Select Elements
let button = document.querySelector("#cookie-btn");
let display = document.querySelector("#fortune-display");
console.log(display);

// 2. Add event Listener
button.addEventListener('click', function () {
    console.log("CLICKEDCLICKED");
    //      generate a random index
    //      get the fortune string
    //      update the display
    // random between 0 - fortune.length
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    display.innerText = fortunes[randomIndex];
});
