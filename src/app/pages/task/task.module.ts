import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TableComponent } from "../../common/components/table/table.component";
import {TableModule} from "../../common/components/table/table.module";
import {ButtonModule} from "../../common/components/button/button.module";
import { FormTaskComponent } from './components/form-task/form-task.component';
import {DialogComponent} from "../../common/components/dialog/dialog.component";
import {DialogModule} from "../../common/components/dialog/dialog.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TaskComponent, FormTaskComponent],
    imports: [
        TableModule,
        CommonModule,
        TaskRoutingModule,
        ButtonModule,
        DialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class TaskModule { }
