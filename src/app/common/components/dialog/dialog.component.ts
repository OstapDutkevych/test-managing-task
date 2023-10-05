import {Component, Inject, OnInit, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogService} from "../../services/dialog/dialog.service";

export interface IDynamicDialogConfig {
  title?: string;
  acceptButtonTitle?: string;
  declineButtonTitle?: string;
  dialogContent: TemplateRef<any>;
  userId?: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDynamicDialogConfig, public dialogService: DialogService) {}

  ngOnInit(): void {
  }

}
