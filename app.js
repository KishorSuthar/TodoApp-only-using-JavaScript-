let todo = [];

let req = prompt("Please enter your request:");

while (true) {
        if (req == "quit") {
                console.log("You quited the app.");
                break;
        }

        if (req == "list") {
                console.log("\n\n---------------");
                for (let i = 0; i < todo.length; i++) {
                        console.log(i + 1, todo[i]);
                }
                console.log("---------------");
        } else if (req == "add") {
                let task = prompt("Please enter your task you want to add:");
                todo.push(task);
                console.log("Task added");
        } else if (req == "delete") {
                let idx = prompt("Please enter the index you want to delete");
                todo.splice(idx - 1, 1);
                console.log("Task deleted successfully.");
        } else if (req == "update") {
                let idx = prompt("Please enter the index you want to update:");
                idx = parseInt(idx);
                if (idx > 0 && idx <= todo.length) {
                        let newTask = prompt("Please enter the new task:");
                        todo[idx - 1] = newTask;
                        console.log("Task updated successfully.");
                } else {
                        console.log("Invalid index.");
                }
        } else {
                console.log("You entered wrong request.");
        }

        req = prompt("Please enter your request:");
}