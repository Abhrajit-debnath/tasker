import fs from "fs";

import path from "path";

const Task_File = path.resolve(process.cwd(), "task.json");

export const addTask = (tasktitle, taskContent) => {
  if (!tasktitle) {
    throw new Error("Invalid Arguement : Task Title have not provided");
  }
  if (!taskContent) {
    throw new Error("Invalid Arguement : Task Content  have not provided");
  }
  let tasks = [];

  try {
    if (fs.existsSync(Task_File)) {
      const data = fs.readFileSync(Task_File, "utf-8");
      tasks = JSON.parse(data);
    }
    const task = {
      tasktitle,
      taskContent,
      status: "Pending",
    };

    tasks.push(task);

    fs.writeFileSync(Task_File, JSON.stringify(tasks, null, 2));
    return task;
  } catch (error) {
    throw new Error(error);
  }
};
