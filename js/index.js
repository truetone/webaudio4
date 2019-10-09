const Slider = require('./slider');
const sliders = Array.from(document.getElementsByClassName("input-range"));

sliders.forEach((slider) => {
  new Slider(slider);
});
