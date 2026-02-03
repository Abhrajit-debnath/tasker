import { rn } from "../config/readline.config.js";

export function greetUser() {
  rn.write("Welcome to Tasker \n type `--help` for to get started \n");
  process.exit(0);
}
