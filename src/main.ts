import "./style.css";

import './store.ts';
import CounterContainer from "./components/CounterContainer.ts";
import CounterDigit from "./components/CounterDigit.ts";

customElements.define("counter-container", CounterContainer);
customElements.define("counter-digit", CounterDigit);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="rows-container">
    <counter-container base="2" digits-count="7"></counter-container>
    <div class="equal-sign-row">=</div>
    <counter-container base="10" digits-count="3"></counter-container>
  </div>
`;
