const todoModel = require("../models/todo-schema");

const createTodo = (req, res) => {
  try {
    let todo = new todoModel(req.body);
    todo.save((err, todos) => {
      if (err || !todos) {
        res.json({
          success: false,
        });
      } else {
        res.json({
          success: true,
          data: todos,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllTodos = (req, res) => {
  try {
    todoModel.find().exec((err, todos) => {
      if (err || !todos || todos.length === 0) {
        res.json({
          success: false,
        });
      } else {
        res.json({
          success: true,
          data: todos,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleTodo = (req, res) => {
  let _id = req.params._id;
  todoModel.findById(_id, (err, todo) => {
    if (err || !todo) {
      res.json({
        success: false,
      });
    } else {
      res.json({
        success: true,
        data: todo,
      });
    }
  });
};

const completeTodo = (req, res) => {
  let _id = req.params._id;
  let isCompleted = req.body;

  todoModel.findByIdAndUpdate(_id, isCompleted, (err) => {
    if (err) {
      res.json({
        success: false,
      });
    } else {
      success: true;
    }
  });
};

const updateTodo = (req, res) => {
  let _id = req.params._id;
  let data = req.body;
  todoModel.findByIdAndUpdate(_id, data).exec((err) => {
    if (err) {
      res.json({
        success: false,
      });
    } else {
      res.json({
        success: true,
      });
    }
  });
};

const deleteTodo = (req, res) => {
  let _id = req.params._id;
  todoModel.findByIdAndDelete(_id).exec((err) => {
    if (err) {
      res.json({
        success: false,
      });
    } else {
      res.json({
        success: true,
      });
    }
  });
};

module.exports = {
  createTodo: createTodo,
  getAllTodos: getAllTodos,
  getSingleTodo: getSingleTodo,
  completeTodo: completeTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
