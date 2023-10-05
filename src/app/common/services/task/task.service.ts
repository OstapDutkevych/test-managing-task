import { Injectable } from '@angular/core';
import {LocaleStorageService} from "../locale-storage/locale-storage.service";
import {TASKS} from "./tasks";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StateTaskEnum, Task, TaskFormAdd} from "../../models/task.models";
import { uid } from 'uid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  formAddTask = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  tasks$ = new BehaviorSubject(TASKS);

  constructor(private _localeStorageService: LocaleStorageService) { }

  setInitialTasksData(){
    if(!this.getListTasks()){
      this._localeStorageService.saveData('tasks', TASKS);
    }else {
      const allTasks = this.getListTasks();
      this.tasks$.next(allTasks);
    }
  }

  getListTasks(): Task[]{
    const data = this._localeStorageService.getData('tasks');
    return data;
  }

  addTask(data: TaskFormAdd){
    const task: Task = {
        id: uid(5),
        name: data.name,
        description: data.description,
        state: StateTaskEnum.queue,
        createdAt: new Date()
    }
    const allTasks = this.getListTasks();
    const payload: Task[] = [...allTasks, task];
    this.tasks$.next(payload);
    this._localeStorageService.saveData('tasks',payload);
  }
}
