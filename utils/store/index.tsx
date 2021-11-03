import React from "react";
import { atom, selector } from "recoil";

export const intialState = atom({
  key: "counter",
  default: 8,
});

export const selectorSize = selector({
  key: "container-size",
  get: ({ get }) => {
    // getting the count of the store
    const countSize = get(intialState);

    // size for container increase
    const sizeChange = countSize * 2;

    return sizeChange;
  },
});
const Store = () => {
  return <div></div>;
};

export default Store;
