import cs from "../assets/images/CS.jpeg";
import { igcse } from "../datas/igcse/igcse";
import { as_and_aDatas } from "../datas/as&a/as&a";
import { map } from "lodash";

export const mainMenu = [
  { to: "/chapters", level: "lower", name: "Low level", image: cs },
  { to: "/chapters", level: "igcse", name: "IGCSE level", image: cs },
  {
    to: "/chapters",
    level: "as_and_a",
    name: "AS and A level",
    image: cs,
  },
  { to: "/chapters", level: "quiz", name: "Quizs", image: cs },
];

const lower = [
  { to: "/data", name: "Data" },
  { to: "/cs", name: "CS" },
];

const getDatas = (datas) =>
  map(datas, ({ name, subsections }) => ({ name, subsections }));

const Igcse = getDatas(igcse);
const as_and_a = getDatas(as_and_aDatas);
const quizs = [{ name: "CPU" }];

export const levels = {
  lower,
  Igcse,
  as_and_a,
  quizs,
};
