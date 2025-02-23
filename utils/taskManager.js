const chalk = require("chalk")
const { readTasks, writeTasks } = require("./fileHandler");

const generateId = () => {
    const tasks = readTasks();
    return tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}

const addTask = (description) => {
    if (!description) {
        console.log(chalk.red("Task description can not be empty"))
        return;
    }
    const tasks = readTasks();
    const newTask = {
        id: generateId(),
        description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log(chalk.green(`Task added successfully (ID: ${newTask.id})`));
}

const updateTask = (id, newDescription) => {
    let tasks = readTasks();
    const task = tasks.find((t) => t.id === id)
    if (!task) {
        console.log(chalk.red("task not found!"))
        return;
    }
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    writeTasks(tasks);
    console.log(chalk.blue(`Task ${id} updated successfully`));
}

const deleteTask = (id) => {
    let tasks = readTasks();
    const newTasks = tasks.filter((t) => t.id !== id);
    if (newTasks.length === tasks.length) {
        console.log(chalk.red("Task not found!"))
        return;
    }
    writeTasks(newTasks);
    console.log(chalk.yellow(`Task ${id} deleted successfully!`));
}

const updateStatus = (id, status) => {
  let tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.log(chalk.red("Task not found!"));
    return;
  }
  task.status = status;
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(chalk.magenta(`Task ${id} marked as ${status}!`));
};

const listTasks = (filter) => {
  let tasks = readTasks();
  if (filter) {
    tasks = tasks.filter((t) => t.status === filter);
  }
  if (tasks.length === 0) {
    console.log(chalk.red("No tasks found!"));
    return;
  }
  console.log(chalk.cyan("\nTask List:"));
  tasks.forEach((task) => {
    console.log(
      chalk.white(
        `ID: ${task.id} | ${task.description} | Status: ${task.status} | Created: ${task.createdAt}`
      )
    );
  });
};

module.exports = { addTask, updateTask, deleteTask, updateStatus, listTasks };