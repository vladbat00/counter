import type AppComponent from "./components/AppComponent.ts";

let value = 0;
let subscribers: AppComponent[] = [];

const _store = {
  get value() {
    return value;
  },
  set value(newValue) {
    value = newValue;
    subscribers = subscribers.filter(s => {
      if (s.isConnected) {
        s.onStoreUpdate();
      }
      return s.isConnected;
    })
  },
  subscribe(subscriber: AppComponent) {
    subscribers.push(subscriber);
  },
};

declare global {
  var store: typeof _store;
}

globalThis.store = _store;

export type Store = typeof _store;
