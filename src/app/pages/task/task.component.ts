import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Task} from "../../common/models/task.models";
import {TaskService} from "../../common/services/task/task.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent, IDynamicDialogConfig} from "../../common/components/dialog/dialog.component";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // tableColumns = ['id', 'name','Assigned to', 'Created at',  'state'];
  @ViewChild('formTaskTemplate') formTaskTemplate: TemplateRef<any> | undefined;
  tableColumns = [
    { caption: 'Id', field: 'id' },
    { caption: 'Name', field: 'name' },
    { caption: 'Date of creation', field: 'createdAt' },
    { caption: 'Assigned to', field: 'assignedUserId' },
    { caption: 'State', field: 'state' },
  ];
  // tasks: Task[] = [];

  constructor(public taskService: TaskService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.taskService.setInitialTasksData()
  }

  onClickTask($event: any) {
    console.log($event);
  }

  openDialogAddTask() {
      const dialogRef = this._dialog.open(DialogComponent, {
        width: '400px',
        data: <IDynamicDialogConfig>{
          title: 'Add New Task',
          dialogContent: this.formTaskTemplate,
          acceptButtonTitle: 'Add',
          declineButtonTitle: 'Discard'
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (!result) return;
        const { name, description } = this.taskService.formAddTask.value

        const data = {
          name: name,
          description: description
        }

        if(data.name && data.description){
          // @ts-ignore
          this.taskService.addTask(data);
        }
      });
  }
}
