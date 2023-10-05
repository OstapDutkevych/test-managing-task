import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {User} from "../../common/models/user.model";
import {UserService} from "../../common/services/user/user.service";
import {BehaviorSubject, Subject} from "rxjs";
import {DialogComponent, IDynamicDialogConfig} from "../../common/components/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('formUserTemplate') formUserTemplate: TemplateRef<any> | undefined;
  @ViewChild('formEditUserTemplate') formEditUserTemplate: TemplateRef<any> | undefined;

  tableColumns = [
    { caption: 'id', field: 'id' },
    { caption: 'Name', field: 'name' },
    { caption: 'Assigned task', field: 'assignedTaskId' },
  ];

  // users: User[] = []

  constructor(public userService: UserService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.setInitialUsersData()
  }

  onClickUser($event: User) {
    this.userService.selectedUser$.next($event);
    const dialogRef = this._dialog.open(DialogComponent,{
      width: '800x',
      data: <IDynamicDialogConfig>{
        title:'User ID',
        dialogContent: this.formEditUserTemplate,
        acceptButtonTitle: "Save",
        declineButtonTitle: 'Discard',
        userId: $event.id
      }
    });

    dialogRef.afterClosed().subscribe(res=>{
      console.log(res)
      if (!res) return;
      this.userService.editUser()
    })
  }

  openDialogAddUser() {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '300px',
      data: <IDynamicDialogConfig>{
        title: 'Add New User',
        dialogContent: this.formUserTemplate,
        acceptButtonTitle: 'Add',
        declineButtonTitle: 'Discard'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      if (!res) return;
      this.userService.addUser();
    });
  }
}
