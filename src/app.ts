import { start } from "repl";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startApp = () => {
  console.log("Welcome to Toy Robot! 🤖");
  rl.on('line', (input: string) => {
    console.log(`Received: ${input}`);
  });
};

startApp();
