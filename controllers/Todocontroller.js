const ToDoModel = require('../models/TodoModel');

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {

    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added successfully...");
            console.log(data);
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body

    console.log('id --->', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Succesfully...."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updates Succesfully...."))
        .catch((err) => console.log(err));
}