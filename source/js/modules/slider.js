import Swiper from "swiper";

const slidesMeta = [
  {
    activeScreens: [0, 1],
    gradient: `linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`,
    image: `url("img/slide1.jpg")`,
    bodyClass: `body--base`
  }, {
    activeScreens: [2, 3],
    gradient: `linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`,
    image: `url("img/slide2.jpg")`,
    bodyClass: `body--light`
  }, {
    activeScreens: [4, 5],
    gradient: `linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`,
    image: `url("img/slide3.jpg")`,
    bodyClass: `body--blue`
  }, {
    activeScreens: [6, 7],
    gradient: `linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`,
    image: `url("img/slide4.jpg")`,
    bodyClass: `body--base`
  }
];

export default () => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);

  const onSlideChange = (withGradient) => () => {
    const activeSlideMeta = slidesMeta.find(({activeScreens}) => activeScreens.includes(storySlider ? storySlider.activeIndex : 0));
    sliderContainer.style.backgroundImage = [activeSlideMeta.image, withGradient && activeSlideMeta.gradient].filter(Boolean).join(`, `);
    document.body.classList.remove(`body--base`, `body--light`, `body--blue`);
    document.body.classList.add(activeSlideMeta.bodyClass);
  };

  onSlideChange(true)();

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: onSlideChange(true),
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: onSlideChange(false),
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
};
