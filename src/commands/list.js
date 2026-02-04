import fs from "fs";
import { Task_File } from "./add.js";
export const listTasks = () => {
  if (!fs.existsSync(Task_File)) {
    return "No Task to list";
  }

  try {
    const raw = fs.readFileSync(Task_File, "utf-8");

    return JSON.parse(raw);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Task file is corrupted");
    }
    throw error;
  }
};
