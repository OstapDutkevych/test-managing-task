import { Component, OnInit } from '@angular/core';
import {User} from "../../../../common/models/user.model";
import {UserService} from "../../../../common/services/user/user.service";
import {DialogService} from "../../../../common/services/dialog/dialog.service";
import {TaskService} from "../../../../common/services/task/task.service";
import {Task} from "../../../../common/models/task.models";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-edit-form-user',
  templateUrl: './edit-form-user.component.html',
  styleUrls: ['./edit-form-user.component.scss']
})
export class EditFormUserComponent implements OnInit {

  allTasks$ = new BehaviorSubject<Task[] | undefined>(undefined);

  constructor(public userService: UserService, private _dialogService: DialogService, private _taskService: TaskService) { }

  ngOnInit(): void {
    this.userService.formEditUser.valueChanges.subscribe((res) => {
      if(this.userService.formEditUser.valid){
        if(this._dialogService.disabledAcceptButton$.value){
          this._dialogService.disabledAcceptButton$.next(false);
        }
      }
      if(this.userService.formEditUser.invalid){
        if(!this._dialogService.disabledAcceptButton$.value){
          this._dialogService.disabledAcceptButton$.next(true);
        }
      }
    })

    this.setInitialValue()

  }


  setInitialValue() {
    const selectedUser: User | undefined = this.userService.selectedUser$.value
    if(selectedUser){
      this.userService.formEditUser.controls.name.patchValue(selectedUser?.name);
      // @ts-ignore
      this.userService.formEditUser.get('assignedTaskId')?.patchValue(selectedUser?.assignedTaskId)
    }

    this._taskService.setInitialTasksData();
    const allTasks: Task[] = this._taskService.getListTasks();
    const filteredTasks = allTasks.filter((task)=> !task.assignedUserId);

    const assignedTask = allTasks.find((task)=>{
      return task.id === selectedUser?.assignedTaskId
    });

    if(assignedTask){
      this.allTasks$.next([...filteredTasks, assignedTask]);
    }else {
      this.allTasks$.next(filteredTasks);
    }
  }
}
