const { addTask, updateTask, deleteTask, updateStatus, listTasks } = require("./taskManager");

const handleCommand = (args) => {
    const command = args[0];

    switch (command) {
        case "add":
            addTask(args.slice(1).join(" "))
            break;
        case "update":
            updateTask(Number(args[1]), args.slice(2).join(" "));
            break;
        case "delete":
            deleteTask(Number(args[1]))
            break;
        case "mark-in-progress":
            updateStatus(Number(args[1]), "in-progress")
            break;
        case "mark-done":
            updateStatus(Number(args[1]), "done");
            break;
        case "list":
            listTasks(args[1]);
            break;
        default:
            console.log("Invalid command! Use: add, update, delete, mark-in-progress, mark-done, list");
    }
}

module.exports = { handleCommand };