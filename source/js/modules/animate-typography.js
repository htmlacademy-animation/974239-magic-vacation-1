const ANIMATION_DURATION = 0.5;
const ANIMATION_OFFSET = 0.4;

const getRandomNum = (min, max) => Math.random() * (max - min) + min;

const defaultOptions = {
  delayAnimationByWord: false,
};

export const animateTypography = (selector, options = defaultOptions) => {
  const textELement = document.querySelector(selector);
  const {delayAnimationByWord = defaultOptions.delayAnimationByWord} = options;

  const words = textELement.innerText.split(` `);

  textELement.innerHTML = `
    ${words.map((word, wordInd) => `
    <span class="animate-typography">
    ${Array.from(word).map((letter) => {
    const wordDelay = delayAnimationByWord ? wordInd * ANIMATION_DURATION : 0;
    const animationDelay = getRandomNum(wordDelay, wordDelay + ANIMATION_OFFSET);
    return `
      <span
        class="animate-typography__letter" 
        style="animation-duration: ${ANIMATION_DURATION}s; animation-delay: ${animationDelay}s"
      >
        ${letter}
      </span>
    `.trim();
  }).join(``)}
    </span>`.trim()).join(` `)}
  `;

  const run = (delay) => {
    const attachAnimationClass = () => {
      textELement
      .querySelectorAll(`.animate-typography`)
      .forEach((element) => element.classList.add(`animate-typography--start`));
    };
    if (delay) {
      return window.setTimeout(attachAnimationClass, delay);
    }
    return attachAnimationClass();
  };

  return run;
};
