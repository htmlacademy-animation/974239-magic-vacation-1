import {animateTypography} from "./animate-typography";

export default () => {
  const runIntroTitle = animateTypography(`.intro__title`, {delayAnimationByWord: true});
  const runIntroDate = animateTypography(`.intro__date`);
  const runSliderItemTitle = animateTypography(`.slider__item-title`);
  const runPrizesTitle = animateTypography(`.prizes__title`);
  const runRulesTitle = animateTypography(`.rules__title`);
  const runGameTitle = animateTypography(`.game__title`);

  document.body.addEventListener(`screenChanged`, ({detail: {screenName}}) => {
    switch (screenName) {
      case `top`: {
        runIntroTitle();
        runIntroDate(1000);
        break;
      }
      case `story`: {
        runSliderItemTitle();
        break;
      }
      case `prizes`: {
        runPrizesTitle();
        break;
      }
      case `rules`: {
        runRulesTitle();
        break;
      }
      case `game`: {
        runGameTitle();
        break;
      }
    }
  });
};
