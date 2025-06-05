# taskmanager

First run using the command "npm start" on a terminal

to add new task make a POSt request to http://localhost:3000/ and add body with a title 
For example: {
    "title": "Adding another cool feature to Kuraz tech"
}

to see all tasks make a GET request http://localhost:3000/ and you will get something like 
[{
    id: 1,
    title: "Adding another cool feature to Kuraz tech",
    completed: false 
}]

to mark a task as completed make a PUT request to http://localhost:3000/id replace the id with your task id you want to mark as completed
For example : http://localhost:3000/1

to delete a task make a DELETE request to http://localhost:3000/id  replace the id with your task id you want to delete
For example: http://localhost:3000/1

to filter between completed and pending tasks you can add ?pending=true if you want to get the uncompleted tasks, ?completed=true to get only the completed tasks using GET request
For example: http://localhost:3000/?completed=true


 
