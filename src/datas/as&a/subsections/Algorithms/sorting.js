import { bubbleSort } from "./sort/bubleSort";
import {insertionSort} from './sort/insertionSort'

export const sorting = {
  name: "Sorting algorithms",
  routes: [
    { name: "Sort", to: "/sort", datas: [] },
    { name: "Bubble sort", to: "/bubble", datas: bubbleSort },
    { name: "Insertion sort", to: "/insertion", datas: insertionSort },
  ],
};
