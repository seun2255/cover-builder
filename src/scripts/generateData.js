import { readdirSync, writeFileSync } from "fs";
const files = readdirSync("public/cards");

const imageData = files
  .filter((file) => /\.(png|jpe?g|gif|svg)$/.test(file))
  .map((file) => ({
    src: `/cards/${file}`,
    name: file,
  }));

const jsonArray = JSON.stringify(imageData);
writeFileSync("src/cards.json", jsonArray);

console.log("Files saved to cards.json");
