class Slider {
  constructor(sliderElem) {
    sliderElem.addEventListener("input",
      (event) => {
        this.onChange(event);
      });

    this.slider = sliderElem;
  }

  onChange(event) {
    this.renderValue(this.valueElem);
  }

  renderValue(targetElem) {
    targetElem.innerHTML = this.slider.value;
  }

  get valueElem() {
    return document.getElementById(this.slider.dataset.valueElem);
  }
}

module.exports = Slider;
