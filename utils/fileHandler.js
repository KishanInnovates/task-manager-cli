const fs = require("fs")
const path = require("path");

const FILE_PATH = path.join(__dirname, "../tasks.json")

if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

const readTasks = () => JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
const writeTasks = (tasks) => fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));

module.exports = { readTasks, writeTasks };