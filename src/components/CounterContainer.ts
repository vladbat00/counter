import minusImage from "/minus.svg";
import plusImage from "/plus.svg";
import AppComponent from "./AppComponent.ts";
import type CounterDigit from "./CounterDigit.ts";

export default class CounterContainer extends AppComponent {
  static get observedAttributes() {
    return ["base", "digits-count"];
  }

  private digitsCount = 4;
  private base = 2;
  private digits: CounterDigit[] = [];

  constructor() {
    super();
  }

  increment() {
    if (store.value < 127) {
      store.value += 1;
    }
  }

  decrement() {
    if (store.value > 1) {
      store.value -= 1;
    }
  }

  connectedCallback() {
    this.digitsCount = Number(this.getAttribute("digits-count") || 4);
    this.base = Number(this.getAttribute("base") || 2);

    const minusButton = document.createElement('input');
    minusButton.type = "image";
    minusButton.src = minusImage;
    minusButton.alt = "minus";
    minusButton.className = "counter-button minus-button";
    minusButton.onclick = () => this.decrement();
    this.appendChild(minusButton);

    for (let i = this.digitsCount - 1; i >= 0; i--) {
      const digit = document.createElement('counter-digit');
      digit.setAttribute('index', i.toString());
      digit.setAttribute('base', this.base.toString());
      this.appendChild(digit);
    }

    const plusButton = document.createElement('input');
    plusButton.type = "image";
    plusButton.src = plusImage;
    plusButton.alt = "plus";
    plusButton.className = "counter-button plus-button";
    plusButton.onclick = () => this.increment();
    this.appendChild(plusButton);
  }
}
