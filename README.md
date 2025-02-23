# Task Tracker CLI

Task Tracker is a command-line interface (CLI) application designed to help users track and manage tasks efficiently. This project allows users to add, update, delete, and mark tasks as in-progress or done while storing task data in a JSON file.

## Features
- Add a new task
- Update or delete tasks
- Mark tasks as in-progress or done
- List all tasks or filter by status (todo, in-progress, done)
- Stores tasks persistently in a JSON file

## Requirements
- The application runs from the command line.
- Accepts user actions and inputs as arguments.
- Stores tasks in a JSON file in the current directory.
- The JSON file is created if it does not exist.
- No external libraries or frameworks are used.
- Uses the native file system module for JSON operations.
- Proper error handling is implemented.

## Installation
```sh
git clone <repository-url>
cd task-tracker-cli
npm install  # If needed
```

## Usage
# Adding a new task
```sh
node index.js add "Buy groceries"
# Output: Task added successfully (ID: 1)
```
# Updating and deleting tasks
```sh
node index.js update 1 "Buy groceries and cook dinner"
node index.js delete 1
```
# Marking a task as in progress or done
```sh
node index.js mark-in-progress 1
node index.js mark-done 1
```
# Listing tasks
```
node index.js list       # Lists all tasks
node index.js list done  # Lists completed tasks
node index.js list todo  # Lists pending tasks
node index.js list in-progress  # Lists ongoing tasks
```
