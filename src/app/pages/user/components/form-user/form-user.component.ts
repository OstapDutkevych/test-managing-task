import { Component, OnInit } from '@angular/core';
import {DialogService} from "../../../../common/services/dialog/dialog.service";

import {UserService} from "../../../../common/services/user/user.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  constructor(private _dialogService: DialogService, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.controlNewUser.reset()
    this.userService.controlNewUser.valueChanges.subscribe((res) => {
      if(this.userService.controlNewUser.valid){
        if(this._dialogService.disabledAcceptButton$.value){
          this._dialogService.disabledAcceptButton$.next(false);
        }
      }
      if(this.userService.controlNewUser.invalid){
        if(!this._dialogService.disabledAcceptButton$.value){
          this._dialogService.disabledAcceptButton$.next(true);
        }
      }
    })
  }

}
