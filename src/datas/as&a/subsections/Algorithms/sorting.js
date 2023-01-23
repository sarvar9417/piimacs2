import { bubbleSort } from "./bubleSort";
import {insertionSort} from './insertionSort'

export const sorting = {
  name: "Sorting algorithms",
  routes: [
    { name: "Sort", to: "/sort", datas: [] },
    { name: "Bubble sort", to: "/bubble", datas: bubbleSort },
    { name: "Insertion sort", to: "/insertion", datas: insertionSort },
  ],
};
