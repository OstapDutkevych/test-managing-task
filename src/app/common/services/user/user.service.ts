import { Injectable } from '@angular/core';
import {USERS} from "./users";
import {LocaleStorageService} from "../locale-storage/locale-storage.service";
import {User, UserFormAdd} from "../../models/user.model";
import {FormControl, FormGroup, UntypedFormControl, Validators} from "@angular/forms";
import { uid } from 'uid';
import {BehaviorSubject} from "rxjs";
import {TaskService} from "../task/task.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = new BehaviorSubject(USERS);

  selectedUser$ = new BehaviorSubject<User | undefined>(undefined);

  formEditUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    assignedTaskId: new FormControl('', [Validators.required]),
  })
  controlNewUser = new FormControl('', [Validators.required])

  constructor(private _localeStorageService: LocaleStorageService, private _taskService: TaskService) { }

  setInitialUsersData(){
    if(!this._localeStorageService.getData('users')){
      this._localeStorageService.saveData('users', this.users$.value);
    }else {
      const allTasks = this.getListUsers();
      this.users$.next(allTasks);
    }
  }

  getListUsers(): User[] {
   return this._localeStorageService.getData('users');
  }

  addUser(){
    const userName = this.controlNewUser.value;
    const user: User = {
      id: uid(5),
      name: userName,
      assignedTaskId: null
    }

    const allUser = this.getListUsers();
    const payload = [...allUser, user];
    this.users$.next(payload);
    this._localeStorageService.saveData('users',payload);
  }

  editUser(){
    const user = this.selectedUser$.value;
    const editUser = this.formEditUser.value;

    console.log(user)
    console.log(editUser)
    if(user?.assignedTaskId !== editUser.assignedTaskId){
      const allTasks = this._taskService.getListTasks();
      const allUsers = this.getListUsers()

      const tasks = allTasks.map((task)=>{
        if(task.assignedUserId === user?.id){
          return {...task, assignedUserId: user?.id}
        }

        if(task.id === user?.assignedTaskId){
          return {...task, assignedUserId: null}
        }

        return task;
      })

      const users = allUsers.map((el)=>{
        if(user?.id === el.id){
          return {...el, assignedTaskId: editUser.assignedTaskId};
        }
        return el;
      })


      console.log(tasks);
      console.log(users);
      // this.users$.next(users);
      // this._taskService.tasks$.next(tasks);
      // this._localeStorageService.saveData('users', users);
      // this._localeStorageService.saveData('tasks', tasks);

    }
  }
}
