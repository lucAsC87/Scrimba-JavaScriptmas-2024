const snowGlobe = document.querySelector('.snow-globe');
const snowFlakes = ['&#10052', '&#10053', '&#10054'];

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 5;
  const size = random(25) + 10;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
    `;
}

function createSnowflake(num) {
/* 
Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
2. See index.css
*/ 
    for (var i = num; i > 0; i--) {
        let snow = document.createElement("div");
        snow.className = "snowflake";
        snow.style.cssText = getRandomStyles();
        snow.innerHTML = snowFlakes[random(snowFlakes.length)];
        snowGlobe.append(snow);
    }
}

setInterval(() => createSnowflake(1), 100) // Let's create a snowflake every 100 milliseconds!

window.addEventListener("load", () => {
  createSnowflake(30)
});

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/