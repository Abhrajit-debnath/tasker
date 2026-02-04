import fs from "fs";

import path from "path";

export const Task_File = path.resolve(process.cwd(), "task.json");

export const addTask = (taskTitle, taskContent) => {
  if (!taskTitle) {
    throw new Error("Invalid Arguement : Task Title have not provided");
  }
  if (!taskContent) {
    throw new Error("Invalid Arguement : Task Content  have not provided");
  }
  let tasks = [];

  if (fs.existsSync(Task_File)) {
    const data = fs.readFileSync(Task_File, "utf-8");
    tasks = JSON.parse(data);
  }
  const checkExistingTask = tasks.some((t) => t.taskTitle === taskTitle);

  if (checkExistingTask) {
    throw new Error("Task Already Exists : Cannot add same task");
  }
  const task = {
    taskTitle,
    taskContent,
    status: "Pending",
  };

  tasks.push(task);

  fs.writeFileSync(Task_File, JSON.stringify(tasks, null, 2));
  return task;
};
