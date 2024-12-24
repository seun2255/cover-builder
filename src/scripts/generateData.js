import { readdirSync, writeFileSync } from "fs";
const files = readdirSync("public/cards");

const imageData = files.map((file) => ({
  src: `/cards/${file}`,
  name: file,
}));

const jsonArray = JSON.stringify([
  ...imageData,
  ...imageData,
  ...imageData,
  ...imageData,
]);
writeFileSync("src/cards.json", jsonArray);

console.log("Files saved to cards.json");
