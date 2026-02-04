#!/usr/bin/env node

import { addTask } from "./src/commands/add.js";
import { listTasks } from "./src/commands/list.js";
import { markTask } from "./src/commands/mark";
import { removeTask } from "./src/commands/remove.js";
import { commands, helpManual } from "./src/commands/actions/commands.js";
import { greetUser } from "./src/commands/actions/greeting.js";

const [, ,,  action, taskTitle, taskContent, taskStatus] = process.argv;

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
  if (tasks.length === 0) {
    console.log("Dont have tasks yet");
  } else {
    const table = tasks.map((t) => ({
      "Task Title": t.taskTitle,
      "Task Content": t.taskContent,
      Status: t.status,
    }));
    if (table) {
      console.table(table);
    }
  }

  process.exit(0);
} else if (action === "remove") {
  const removedTask = removeTask(taskTitle);

  if (removeTask) {
    console.log(`Task "${removedTask.taskTitle}" removed successfuly`);
  
  }
} else if (action === "mark") {
  const [updatedTask] = markTask(taskTitle, taskContent);

  console.log(
    `Task "${updatedTask.taskTitle}'s" status updated to ${updatedTask.status} successfuly`,
  );
  process.exit(0);
} else if (action === "help") {
  if (helpManual) {
    for (const element of helpManual) {
      console.log(element);
    }
  } else {
    throw new Error("Unable to load commands");
  }
  process.exit(0);
}
