import h2 from "./main.js";
import { paragraph, paragraph2 } from "./main.js";

const h1 = React.createElement("h1", null, "HELLO WORLD!");
const div = React.createElement("div", null, [h1, h2, paragraph, paragraph2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

const arr = [100, 200, 300, 400, 500];

const [a, b, ...l] = arr;

console.log(a, b);
console.log(l);
