const textElement = document.getElementById("text");
const staticText = "I Am Passionate ";
const dynamicTexts = ["Developer", "Designer", "to the world of coding"];
let textIndex = 0;
let letterIndex = 0;
let isErasing = false;
let isRevealingAlphabets = false;

function type() {
  if (!isErasing && !isRevealingAlphabets) {
    const dynamicText = dynamicTexts[textIndex];

    if (letterIndex <= dynamicText.length) {
      textElement.innerHTML =
        staticText +
        "<u>" +
        dynamicText.slice(0, letterIndex) +
        "</u><span class='cursor'></span>";
      letterIndex++;
      setTimeout(type, 100); // Typing speed (slower)
    } else {
      isRevealingAlphabets = true;
      setTimeout(type, 500); // Delay before revealing alphabets (0.5 seconds)
    }
  } else if (isRevealingAlphabets) {
    const dynamicText = dynamicTexts[textIndex];

    if (letterIndex <= dynamicText.length) {
      textElement.innerHTML =
        staticText +
        "<u>" +
        dynamicText.slice(0, letterIndex) +
        "</u><span class='cursor'></span>";
      letterIndex++;
      setTimeout(type, 50); // Alphabet revealing speed
    } else {
      isRevealingAlphabets = false;
      setTimeout(() => {
        isErasing = true;
        letterIndex--; // Start erasing from the last character of the dynamic text
        type(); // Start erasing immediately
      }, 1000); // Delay before starting the erasing animation (1 second)
    }
  } else if (isErasing) {
    const dynamicText = dynamicTexts[textIndex];

    if (letterIndex >= 0) {
      textElement.innerHTML =
        staticText +
        "<u>" +
        dynamicText.slice(0, letterIndex) +
        "</u><span class='cursor'></span>";
      letterIndex--;
      setTimeout(type, 50); // Erasing speed
    } else {
      isErasing = false;
      textIndex = (textIndex + 1) % dynamicTexts.length; // Cycle through dynamic texts
      letterIndex = 0;
      setTimeout(type, 1000); // Delay before starting the typing animation again (1 second)
    }
  }
}

type();
