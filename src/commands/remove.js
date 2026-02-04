import fs from "fs";
import { Task_File } from "./add.js";
export const removeTask = (taskTitle) => {
  if (!taskTitle) {
    throw new Error("Task Title not provided");
  }

  if (!fs.existsSync(Task_File)) {
    throw new Error("No tasks found");
  }

  const raw = fs.readFileSync(Task_File, "utf-8");
  if (!raw) {
    throw new Error("Unable to read file");
  }

  const tasks = JSON.parse(raw);
  const index = tasks.findIndex((t) => t.taskTitle === taskTitle);
  if (index === -1) {
    throw new Error("Task not found");
  }

  const [removedTask] = tasks.splice(index, 1);

  fs.writeFileSync(Task_File, JSON.stringify(tasks));

  return removedTask;
};
