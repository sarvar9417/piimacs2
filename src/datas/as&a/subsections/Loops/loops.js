import {loop} from './loop'
import {whileLoop} from './while'

const forLoop = {
  name: "For",
  definations: [],
};



const repeatLoop = {
  name: "Repeat until",
  definations: [],
};

export const loops = {
  name: "Loops: For, While, Repeat until",
  routes: [
    { name: "Loop", to: "/loop", datas: loop },
    { name: "For", to: "/for", datas: forLoop },
    { name: "While", to: "/while", datas: whileLoop },
    { name: "Repeat until", to: "/repeat", datas: repeatLoop },
  ],
};
