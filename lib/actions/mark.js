import fs from "fs";
import { Task_File } from "./add.js";
export const markTask = (taskTitle, taskStatus) => {
  if (!taskTitle) {
    throw new Error("Task title required");
  }
  if (!taskStatus) {
    throw new Error("Task status required");
  }

  const normalised = taskStatus.toLowerCase();

  if (normalised !== "completed" && normalised !== "pending") {
    throw new Error("Only completed or pending state allowed");
  }
  if (!fs.existsSync(Task_File)) {
    throw new Error("No tasks yet");
  }

  const raw = fs.readFileSync(Task_File, "utf-8");
  if (!raw) {
    throw new Error("unable to read tasks");
  }
  const tasks = JSON.parse(raw);
  const updatedTask = tasks.map((task) => {
    if (task.taskTitle === taskTitle) {
      return { ...task, status: normalised };
    }
    return task;
  });
  if (!updatedTask) {
    throw new Error("Task not found");
  }
  fs.writeFileSync(Task_File, JSON.stringify(updatedTask, null, 2));
  

  return updatedTask.filter((t)=>t.taskTitle===taskTitle)
};
