import { linearSearch } from "./linearSearch";
import { binarySearch } from "./binarySearch";
import { search } from "./search";

export const searching = {
  name: "Searching algorithms",
  routes: [
    { name: "Search", to: "/search", datas: search },
    { name: "Linear search", to: "/linear", datas: linearSearch },
    { name: "Binary search", to: "/binary", datas: binarySearch },
  ],
};
