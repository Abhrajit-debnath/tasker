#!/usr/bin/env node

import { addTask } from "./lib/actions/add.js";
import { listTasks } from "./lib/actions/list.js";
import { removeTask } from "./lib/actions/remove.js";
import { commands } from "./lib/commands.js";
import { greetUser } from "./lib/greeting.js";
// console.log(process.argv);

const [, , command, action, taskTitle, taskContent, taskStatus] = process.argv;
// console.log(process);
if (!action) {
  greetUser();
  process.exit(0);
}

if (!commands.includes(action)) {
  console.error("Unknown command");
  process.exit(1);
}

if (action === "add") {
  const task = addTask(taskTitle, taskContent);
  console.log(`Task "${task.taskTitle}" Created`);
  process.exit(0);
} else if (action === "list") {
  const tasks = listTasks();
  console.log(tasks);

  const table = tasks.map((t) => ({
    "Task Title": t.taskTitle,
    "Task Content": t.taskContent,
    Status: t.status,
  }));

  console.table(table);
  process.exit(0);
} else if (action === "remove") {
  const removedTask = removeTask(taskTitle);
  if (removeTask) {
    console.log(`Task ${removedTask.taskTitle} removed successfuly`);
  }
  process.exit(0);
}
