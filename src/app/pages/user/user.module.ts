import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {TableModule} from "../../common/components/table/table.module";
import {ButtonModule} from "../../common/components/button/button.module";
import { FormUserComponent } from './components/form-user/form-user.component';
import {DialogModule} from "../../common/components/dialog/dialog.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { EditFormUserComponent } from './components/edit-form-user/edit-form-user.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    UserComponent,
    FormUserComponent,
    EditFormUserComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        TableModule,
        ButtonModule,
        DialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule
    ]
})
export class UserModule { }
