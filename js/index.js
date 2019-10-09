const Slider = require('./slider');
const sliders = Array.from(document.getElementsByClassName("input-range"));

class App {
  constructor(sliderElems) {
    this.sliders = sliderElems.map((slider) => {
      new Slider(slider).init();
    });
  }
}

const app = new App(sliders);
