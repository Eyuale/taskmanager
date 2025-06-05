require("dotenv").config()

const express = require("express");
const app = express()

app.use(express.json())

let tasks = []


app.post('/' ,(req, res) => {
    const { title } = req.body;
    
    if(title === ""){
        res.status(400).json("Title must not be empty")
    }

    tasks.push({ id: tasks.length + 1, title, completed: false })
    res.status(201).json("New task added", tasks)
})

app.get('/', (req, res) => {
    if(tasks.length === 0){
        res.status(404).json("No tasks found")
    }

    const { completed, pending } = req.query;
    if(completed){
        tasks = tasks.filter(task => task.completed === true)
    }else if(pending){
        tasks = tasks.filter(task => task.completed === false)
    }

    res.json(tasks)
})

app.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.json("Task deleted")
})

app.put('/:id', (req, res) => {
    const id = Number(req.params.id);

    tasks = tasks.map(task => task.id === id ? {...task,    completed: true} : task);

    console.log(tasks);
    res.json("Task Completed")
})

app.listen(3000, () => {
    console.log("Server started");
})