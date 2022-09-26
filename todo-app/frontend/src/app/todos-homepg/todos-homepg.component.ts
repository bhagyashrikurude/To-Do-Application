import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { taskData, TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-homepg',
  templateUrl: './todos-homepg.component.html',
  styleUrls: ['./todos-homepg.component.scss'],
})
export class TodosHomepgComponent implements OnInit {
  todoForm!: FormGroup;
  tasks: taskData[] = [];
  inprogress: taskData[] = [];
  completed: taskData[] = [];

  constructor(private fb: FormBuilder, private todo: TodosService) {
    this.todoForm = fb.group({
      title: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
  }
  addTask() {
    const data = this.todoForm.value;
    data.status = 'completed';
    console.log(data);

    this.todo.addTask(data).subscribe(
      (res) => {
        alert('Task added successfully');
        this.getAllTodos();
      },
      (err) => alert('Error while adding task')
    );
    this.todoForm.reset();
  }

  getAllTodos() {
    this.todo.getAllTodos().subscribe((todos: any) => {
      console.log(todos);
      if (todos.success) {
        this.tasks = todos.data.filter((todo: any) => {
          if (todo.status == 'todo') {
            return todo;
          }
        });

        this.inprogress = todos.data.filter((todo: any) => {
          if (todo.status == 'progress') {
            return todo;
          }
        });

        this.completed = todos.data.filter((todo: any) => {
          if (todo.status == 'completed') {
            return todo;
          }
        });
      }
    });
  }

  deleteTask(todostatus: string, i: number) {
    let task: any;
    if (todostatus == 'todo') {
      task = this.tasks[i];
      this.deleteAPICall(task);
    } else if (todostatus == 'progress') {
      task = this.inprogress[i];
      this.deleteAPICall(task);
    } else if (todostatus == 'completed') {
      task = this.completed[i];
      this.deleteAPICall(task);
    }
  }
  deleteAPICall(task: any) {
    this.todo.deleteTodo(task._id).subscribe((result: any) => {
      console.log(result);
      if (result.success) {
        this.getAllTodos();
      }
    });
  }
  editTask() {}
}
