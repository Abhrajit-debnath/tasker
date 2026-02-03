#!/usr/bin/env node

import { addTask } from "./lib/actions/add.js";
import { commands } from "./lib/commands.js";
import { greetUser } from "./lib/greeting.js";
// console.log(process.argv);

const [, , command, action, taskTitle, taskContent, taskStatus] = process.argv;
// console.log(process);
if (!action && command === "tasker") {
  greetUser();
  process.exit(0);
}

if (!commands.includes(action)) {
  console.error("Unknown command");
  process.exit(1);
}

if (action === "add") {
  const response = addTask(taskTitle, taskContent);
  console.log(`Task "${response.tasktitle}" Created`);
  process.exit(0);
} else if (action === "list") {
  console.log("list commands");
}
