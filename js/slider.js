class Slider {
  constructor(sliderElem) {
    this.slider = sliderElem;
    this.changeEvent = new Event("sliderChange");
  }

  init() {
    this.renderValue(this.valueElem);
    this.bind();
  }

  bind() {
    this.slider.addEventListener("input",
      (event) => {
        this.onInput(event);
      });
  }

  onInput(event) {
    this.renderValue(this.valueElem);
    this.slider.dispatchEvent(this.changeEvent);
  }

  renderValue(targetElem) {
    targetElem.innerHTML = this.value;
  }

  get valueElem() {
    return document.getElementById(this.slider.dataset.valueElem);
  }

  get value() {
    return this.slider.value;
  }

  get name() {
    return this.id;
  }
}

module.exports = Slider;
