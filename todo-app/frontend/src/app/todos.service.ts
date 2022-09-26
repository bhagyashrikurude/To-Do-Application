import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface taskData {
  _id: string;
  title: string;
  status: string; //'todo' | 'InProgress' | 'Completed'
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  addTask(data: any): Observable<any> {
    return this.http.post('http://localhost:3200/api/todo', data);
  }

  getAllTodos(): Observable<taskData[]> {
    return this.http.get<taskData[]>('http://localhost:3200/api/todos');
  }

  deleteTodo(_id: string): Observable<any> {
    return this.http.delete('http://localhost:3200/api/todo/' + _id);
  }
}
