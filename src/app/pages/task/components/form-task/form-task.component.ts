import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DialogService} from "../../../../common/services/dialog/dialog.service";
import {TaskService} from "../../../../common/services/task/task.service";
import {TaskFormAdd} from "../../../../common/models/task.models";

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {

  constructor(private _dialogService: DialogService, public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.formAddTask.valueChanges.subscribe((res) => {
        if(this.taskService.formAddTask.valid){
          if(this._dialogService.disabledAcceptButton$.value){
            this._dialogService.disabledAcceptButton$.next(false);
          }
        }
        if(this.taskService.formAddTask.invalid){
          if(!this._dialogService.disabledAcceptButton$.value){
            this._dialogService.disabledAcceptButton$.next(true);
          }
        }
    })
  }

}
