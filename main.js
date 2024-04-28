#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my todo list app!");
let toDos = ["iqra", "hania", "hajwa"];
let condition = true;
while (condition) {
    let answers = await inquirer.prompt({
        name: "operator",
        type: "list",
        message: "select an operator:",
        choices: ["Add", "Update", "View", "Delete"]
    });
    if (answers.operator == "Add") {
        let addTodo = await inquirer.prompt([
            {
                name: "add",
                message: "what do you want to add your todo?",
                type: "input"
            }
        ]);
        toDos.push(addTodo.add);
        condition = addTodo.add;
        console.log(toDos);
    }
    if (answers.operator == "Update") {
        let updateTodo = await inquirer.prompt([
            {
                name: "update",
                message: "What do you want to Update in your list?",
                type: "list",
                choices: toDos.map(item => item)
            }
        ]);
        let addTodo = await inquirer.prompt([
            {
                name: "add",
                message: "what do you want to add your list?",
                type: "input"
            }
        ]);
        let newTodo = toDos.filter(val => val == updateTodo.add);
        toDos = [...newTodo, addTodo.add];
        console.log(toDos);
    }
    if (answers.operator == "View") {
        console.log("****** ToDo list app ******");
        console.log(toDos);
    }
    if (answers.operator == "Delete") {
        let DeleteTodo = await inquirer.prompt([{
                name: "deleteTodo",
                message: "What do you want to delete in your list?",
                type: "list",
                choices: toDos.map(item => item)
            }]);
        let newTodo = toDos.filter(val => val == DeleteTodo.add);
        toDos = [...newTodo];
        console.log(toDos);
    }
}
