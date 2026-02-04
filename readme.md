# TaskBuddy
TaskBuddy is a simple command-line tool to add, list, complete, and delete tasks using a local file.

## Intallation
```bash
npm install -g taskbuddy
```
## Features

- Add task
- Delete task
- List task
- Mention task status
- Change task status


## Commands

| Command | Description |
|--------|------------|
| add <title> <content> | Add a new task |
| list | List all tasks |
| mark <title> <status> | Update task status (completed or pending) |
| remove <title> | Delete a task |


## Usage

1. Adding Tasks

```bash
tasker add "Learn Node.js" "Practice fs module"
```
2. Listing Tasks
```bash
taskbuddy list
```
3. Remove Tasks
```bash
tasker remove "Learn Node.js"
```
4. update Tasks Status
```bash
tasker mark "Learn Node.js" completed
```
## Data storage

Tasks are stored locally in a JSON file on user's system

