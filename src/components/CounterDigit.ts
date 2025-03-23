import AppComponent from "./AppComponent.ts";

export default class CounterDigit extends AppComponent {
  static get observedAttributes() {
    return ["index", "base"];
  }

  constructor() {
    super();

    this.input = document.createElement("input");
    this.input.className = "digit";
    this.input.disabled = true;
    this.input.inputMode = "numeric";
  }

  onStoreUpdate() {
    this.input.value = this.getDigit().toString();
  }

  getDigit(): number {
    return (store.value / Math.pow(this.base, this.index)) % this.base;
  }

  private index: number = 0;
  private base: number = 10;
  private input: HTMLInputElement;

  connectedCallback() {
    store.subscribe(this);
    this.index = Number(this.getAttribute("index") || 0);
    this.base = Number(this.getAttribute("base") || 10);

    this.input.value = this.getDigit().toString();

    this.appendChild(this.input);
  }
}
